
import json

def load_data(path):
    try:
        
        with open(path,'r') as file:
            data=json.load(file)
            return data
    except Exception as e:
        return []

def count_creat(path):
    data= load_data(path)
    
    data_store={}
    account_number=0
    
    while True:
        
        while True:
            
            account_number=input('please enter your account number: ')
            if len(account_number)==10:
                if account_number.isdigit():
                    account_number=int(account_number)
                    data_store['account_number']=account_number
                    break
                print('enter your only digit number!')    
            else:
                print('enter your 10 number! ')        
        while True:
            name=input('please enter your name: ')
            if name.isalpha():
                data_store['user_name']=name
                break
            else:
                print('enter your correct name!')  
                
        address_list=[]          
        while True:
            address_store={}
            village=input('please enter your address: ')        
            if village.isalnum():
                address_store['address']=village
                district=input('please enter your district: ')
                if district.isalnum():
                    address_store['district_name']=district
                    state=input('please enter your state: ')
                    if state.isalnum():
                        address_store['State']=state
                        pincode=input('pelase enter your pin code: ')
                        if pincode.isdigit():
                            pincode=int(pincode)
                            address_list.append(address_store)
                            data_store['address']=address_list
                            break
                            
                        
            else:
                print('enter your vailid address!')    
        data.append(data_store) 
        print()
        print('Account creat successsfully!')  
        print()
        with open(path,'w') as file:
            json.dump(data,file,indent=4)    
         
        break
          


