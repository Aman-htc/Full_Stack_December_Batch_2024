import json

def load_data(path):
    try:
        
        with open(path,'r') as file:
             data=json.load(file)
             return data
    except  Exception as e:
        return []    



def diposit_money(path):
    
    details={}
    data=load_data(path)
    total=0
    
    check_account=input('please enter your account number: ')
    if  check_account.isdigit():
         check_account=int( check_account)
    for n in data:
        for key,value in n.items():
            if value ==  check_account:
                money=int(input('please enter your diposit money: '))    
                total +=money
    details['deposit_money']=money
    
    
    data.append(details)
    with open(path,'w') as file:
        json.dump(data,file,indent=4)            
        
    