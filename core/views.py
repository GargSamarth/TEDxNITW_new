from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
import sys
import datetime


#libraries for updating Spreadsheet
import gspread
# import pandas as pd
from oauth2client.service_account import ServiceAccountCredentials
# Create your views here.

def Home(request):
    print(request)
    if(request=='POST'):
        print("Aahhhh YEahhh!")
    else:
        return render(request , 'home.html')


def Speakers(request):
    return render(request , 'speakers.html')

def Xperience(request):
    return render(request , 'xperience.html')

def About(request):
    return render(request , 'about.html')

def updateData(request):
    if request.method == 'POST':

        
        name = request.POST['name']
        email = request.POST['email']
        time_stamp = datetime.datetime.now()
        time_stamp = time_stamp.strftime("%Y-%m-%d %H:%M:%S")

        row = [name , email , time_stamp]

        try:
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
            
            index = 1
            sheet_instance.insert_row(row, index)       

          
            return redirect('/')
        except:
            e = sys.exc_info()[0]
            print(e)        
            return HttpResponse("hi")