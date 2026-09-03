
import json

def load_data(path):
    try:
        
        with open(path,'r') as file:
             data=json.load(file)
             return data
    except  Exception as e:
        return [] 



def withdrow_money(path):
    data=load_data(path)
    details={}
    money=0
    
    a=input('please enter your account number: ')
    if a.isdigit():
        a=int(a)
    for n in data:
        for key,value in n.items():
            if value==a:
                money=int(input('pease enter withdrow money: '))
                
            
    details['withdrow_money']=money
    # details['total']=total

    data.append(details)          
    with open(path,'w') as file:
        json.dump(data,file,indent=4)            
                
             

    
    
    