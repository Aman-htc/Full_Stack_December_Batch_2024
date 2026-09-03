path = r"Src/Database/storeuserdetails.json"


from Bnackaccount import banksystem
from Bnackaccount import diposit
from Bnackaccount import withdrow
def account_menu():
    

    print("======Simple Banking System======")

    print("==============================")

    print("1. Create a bank Account :")
    print("2. Deposit Money :")
    print("3. Wihdraw Money :")
    print("4. Check Balance :")
    print("5. View Account Details :")
    print("6. Exits :")

    print("==============================")  
    print() 
    while True:
        
        
        

        choice_press=input('please enter your choice number: ')
        if choice_press.isdigit():
            choice_press=int(choice_press)
            if choice_press == 1:
                banksystem.count_creat(path) 
                
            elif choice_press == 2:
                
                
                t=diposit.diposit_money(path) 
                
            elif choice_press == 3:
                withdrow.withdrow_money(path)
                
            elif choice_press ==6:
                break    
                
