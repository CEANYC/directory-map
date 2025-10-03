import gspread
import pandas as pd
import sys


def load_file(config_path, sheet_id, output_path):
    gc = gspread.service_account(filename=config_path)
    sheet = gc.open_by_key(sheet_id)
    worksheet = sheet.get_worksheet(0)
    df = pd.DataFrame(worksheet.get_all_records())
    df.to_csv(output_path, index=False)


if __name__ == '__main__':
    config_path = sys.argv[1]
    sheet_id = sys.argv[2]
    output_path = sys.argv[3]
    load_file(config_path, sheet_id, output_path)
