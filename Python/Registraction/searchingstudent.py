import json
import time
import datetime
import json
import logger


def reconds(path):
    with open(path,'r') as file:
        
        return json.load(file)
        
        



def recods_data(path):
    
    
    search_data= reconds(path) 
    print()
    print('*'*28) 
    print(    '   *--Search data manu--*')
    print('*'*28)
    print("")
    print('='*35)
    print('press- 1 for qualification-based search!')
    print('press- 2 for contact-based search!')
    print('press- 0 for Exits!')
    print('='*35)
    print()
    while True:
        
        try: 
            choice_press=int(input('Enter your press number: '))
            
                
            if choice_press == 1:
                input_number=input('Enter the qualification to search: ')
                print('Qualification data seraching',end='')
                for n in range(5):
                    time.sleep(1)
                    print('.',end='')
                print()
                    
                found= False  
                
                for data in search_data:
                    for n in data['qualification']:
                        for key,value in n.items():
                            if key == 'qualification_name' and value == input_number.lower():
                                print()
                                print('student detials')
                                
                                print(json.dumps(data,indent=4))
                                
                                found= True
                                print()
                                
                if not found:
                    print('No student found with this qulification!')                
            elif choice_press == 2:
                input_number=int(input('enter the contact to search: ' ))
                print('Contact data seraching',end='')
                for n in range(5):
                    time.sleep(1)
                    print('.',end='')
                print()    
                    
                found= False    
                for data in search_data:
                    for key,value in data.items():
                        if key == 'contact' and value == input_number:
                            print()
                            print('student detials')
                            print(json.dumps(data,indent=4))
                            found= True
                            print()
                if not found:
                    
                    print('No student found with this conatct number!')
            elif choice_press == 0:
                break    
            else:
                print('Invalid number please enter only 1 or 2')
    
        except Exception as e:
            date=datetime.datetime.now()
            Error_data={"error":str(e),"funcation_name":"recods_data()","date":date,'username':'aman kushwaha'}
            logger.write_logs(str(Error_data))
            
            print('please enter your only digits number!')
                    
                
        