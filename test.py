import gspread
import pandas as pd
from oauth2client.service_account import ServiceAccountCredentials


# define the scope
scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']

# add credentials to the account
creds = ServiceAccountCredentials.from_json_keyfile_name('tedx-3bbcceb01a8f.json', scope)

# authorize the clientsheet 
client = gspread.authorize(creds)



# get the instance of the Spreadsheet
sheet = client.open('test')

# get the first sheet of the Spreadsheet
sheet_instance = sheet.get_worksheet(0)
row = ["I'm","inserting","a","row","into","a,","Spreadsheet","with","Python2"]
index = 1
sheet_instance.insert_row(row, index)
