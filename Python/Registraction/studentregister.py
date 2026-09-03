import json
import datetime
import logger
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
                    
            
            email=input('pleasae enter your email: ') 
            student_data['email']=email         
            qualification_list=[]    
            while True:
                qualification_data={}
                qualification_data['qualification_name']=input('please enter your qualification name: ')
                qualification_data['passing_year']=input('please enter your qualification passing year: ')
                qualification_list.append( qualification_data)
                student_data['qualification']= qualification_list
                ask_qualification=input('add more qualification (yes- no): ').lower()
                if  ask_qualification !="yes":
                    break
            ask_sumbit=input('please Sumbit the data (yes - no): ')
            if ask_sumbit.lower() =='yes':
                
                data_store.append(student_data)
                with open(path,'w') as file:
                    # json.dump(data_store,file, indent=4)
                    file.write(json.dumps(data_store,indent=4))
                print()
                

                print('Your Registration is complete successfully!') 
                print()
            
            else:
                print('All your data was not saved!')
                print()
                
            ask_registration=input('Do you want to registration (yes-no): ').lower()           
            if ask_registration !='yes':
                
                break
            
        
    except Exception as e:
        
        date=datetime.datetime.now()   
        error_data={'error':str(e),'funcation_name':"details_student()","date":date,'user_name':'Aman kushwaha'}
        logger.write_logs(str(error_data))
        
        print()
        print('Technical issue after some time try!')        
                      
                      
class Aman:
    def __int__(self):    
        print('aman kushwaha')

data = Aman()        