import json
path=r"D:\json_folder\studentregister.json"
import studentregister

import displaydata
import searchingstudent
import datetime
import logger





def student_menu():
    
    
    while True:
        print()
        print("*"*40)
        print("       *--STUDENT DETAILS MENU--*")
        print("*"*40)
        print()
        print("="*40)
        print("please choose any option:\n")
        
        print('1. Registration new student and store data!')
                
        print('2. Desplay all student data!')
        print('3. Search student data!')
        print('0. Exit') 
        print('='*40)
        print()
    
        try:
            press_number=int(input(' Enter your choice number: '))
            if press_number == 1:
                
                
                studentregister.details_student(path)
            
            elif press_number == 2:
                displaydata.data_read(path)
            elif press_number == 3:
                searchingstudent.recods_data(path)

            elif press_number == 0:
                print()
                print('Thanks for your visit!')
                break        
            else:
                print('invalid number!') 
        except Exception as e:
            
            date=datetime.datetime.now()
            Error_data={"error":str(e),"funcation_name":"student_menu()","date":str(date),'username':'aman kushwaha'}
            
            logger.write_logs(str(Error_data))
            
            print('Invlaid input enter your numeric value only!')
                   
                
                
                   
student_menu()     