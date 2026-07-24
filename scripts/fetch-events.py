import gspread
import io
import json
import pandas as pd
import sys

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload


def load_file(config_path, sheet_id):
    gc = gspread.service_account(filename=config_path)
    sheet = gc.open_by_key(sheet_id)
    worksheet = sheet.get_worksheet(0)
    df = pd.DataFrame(worksheet.get_all_records())
    return df


def get_filename(file_id, service):
    try:
        request = service.files().get(fileId=file_id)
        file = io.BytesIO()
        downloader = MediaIoBaseDownload(file, request)
        done = False
        while done is False:
            status, done = downloader.next_chunk()
    except HttpError as error:
        print(f"An error occurred: {error}")
        file = None

    if file:
        return json.loads(file.getvalue())['name']


def download_image(credentials, url, output_path_images):
    try:
        # create drive api client
        service = build("drive", "v3", credentials=credentials)

        file_id = url.split('=')[-1]

        # TODO make generic using id?
        filename = get_filename(file_id, service)

        request = service.files().get_media(fileId=file_id)
        file = io.FileIO(f'{output_path_images}/{filename}', mode='wb')
        downloader = MediaIoBaseDownload(file, request)
        done = False
        while done is False:
            status, done = downloader.next_chunk()
    except HttpError as error:
        print(f"An error occurred: {error}")
        return None

    if file:
        return filename


def load_images(credentials, df, output_path_images):
    print('Downloading images')
    images = df['Image']
    filenames = []
    for image in images:
        if image:
            filenames.append(download_image(credentials, image,
                output_path_images))
        else:
            filenames.append(None)
    print('Done downloading images')

    df['downloaded'] = filenames

    return df


if __name__ == '__main__':
    config_path = sys.argv[1]
    sheet_id = sys.argv[2]
    output_path = sys.argv[3]
    output_path_images = sys.argv[4]

    credentials = service_account.Credentials.from_service_account_file(
        config_path)

    df = load_file(config_path, sheet_id)
    df = load_images(credentials, df, output_path_images)
    df.to_csv(output_path, index=False)
