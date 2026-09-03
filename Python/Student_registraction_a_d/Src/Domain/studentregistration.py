# path=r"student_registration_task_python/Src/Database/studentdata.json"
import json
import os
def get_load(path):
    if os.path.exists(path):
        with open(path,'r') as file:
            try:
                return json.load(file)   
            except json.JSONDecodeError:
                return []    
    else:
        return []            




def details_student(path):
    try:
        data_store= get_load(path)
    
        
        while True:
            
            student_data={}
            print('*-Start Registration-*')
            Id=input('please enter your id: ')
            if Id.isdigit():
                student_data['id']=int(Id)
                break
            else:
                print()
                print('invalid!id  enter your digit number only!')    
            
        while True:
            name=input('please enter your name: ').lower()
            
            if name.isalnum():
                student_data['name']=name
                break
            else:
                print()
                print('invalid!name enter the coorect name!') 
                
                
        while True:
            contact=input('please enter your contact details: ')        
            if contact.isdigit() and len(contact)==10:
                student_data['contact']=int(contact)
                break
            else:
                print()
                print('invalid! number enter the correct number!') 
                
                
        while True:
            address=input('please enter your address: ')        
            if address.isalnum():
                student_data['address']=address
                break
            else:
                print()
                print('invalid! address enter the valid address!') 
        active=input('is the student an active (yes/no): ').lower()
        if active=='yes':
            student_data['active']=True
        else:
            student_data['active']=False 
                
        data_store.append(student_data) 
            
        with open(path,'w') as file:
            
            json.dump(data_store,file, indent=4)
            
    except Exception as e:
        print('Technical issue please wait') 
                