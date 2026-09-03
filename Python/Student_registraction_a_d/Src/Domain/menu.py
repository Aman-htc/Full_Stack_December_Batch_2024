path=r"student_registration_task_python/Src/Database/studentdata.json"
from Domain import studentregistration

           
from Report.ActiveStudent import activestudentdetails

from Report.InActiveStudent import inactivestudentdetails
def report_data():
                
    while True:
        
                
        print('1. Press Active Student!')
        print('2. press Inactive Student!')
        print('0. Press Exit!')
        press_number=int(input('please enter your press number: '))
        if press_number == 1:
            activestudentdetails.active_student(path)
        elif press_number == 2:
            inactivestudentdetails.inactive_student(path)
        
        elif press_number==0:
            
            break           
        else:
            print('invalid number!') 
            

def student_menu():
    try:
        while True:
            
            
            print('1. Press Register and save data in json file!')
                
            print('2. Display Active and Inactive Student!')
            print('0. Press Exit')
            choice_number=int(input('please enter your press number: '))
            if choice_number ==1:
                
                studentregistration.details_student(path)
                    
            elif choice_number==2:
                    
                report_data()
            elif choice_number==0:
                
                break          
    
    except Exception as e:
        print('Technical issue please wait!')
