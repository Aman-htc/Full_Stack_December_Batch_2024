import datetime
import time
import calendar
def creat_datetime():
    now=datetime.datetime.now()
    print(now)


def creat_specifdate():
    creat=int(input('please enter your date and time: ') )   
    specif=datetime.datetime(creat)
    print(specif)

def get_tomorrowdate():
    check=int(input('please enter your tomorrow date and yestarday date: '))
    now=datetime.datetime.now()
    tomorrow=now+datetime.timedelta(check)
    print(tomorrow)
    
def get_time():
    creat_time=time.time() 
    print(creat_time)

def get_calendar():
    calender=int(input('please enter your year: '))
    print(calendar.calendar(calender))
    
def get_month():
    year=int(input('please entr your year: '))
    month=int(input('please enter your month: '))    
    print(calendar.month(year,month))  


def get_leap():
    year=int(input('please enter your year: '))
    is_leap=calendar.isleap(year)
    print(is_leap)




def datetime_menu():
    print()
    print('------Datetime Manu-----')
    print()
    print('1. check today date and time! ')
    print('2. creat date and time! ')
    print('3. Check Tomorrow and yesterday date time! ')
    print('4. Check only today time!')
    print('5. Check all calendar in year!')
    print('6. Check month calendar in year!')
    print('7. Check leap year!')
    print('0. Exit')
    while True:
        
        choice =int(input('please enter your choice number: '))
        if choice == 1:
            creat_datetime()
        elif choice == 2:
            creat_specifdate()
        elif choice == 3:
            get_tomorrowdate()
        elif choice == 4:
            get_time()
        elif choice == 5:
            get_calendar()
        elif choice == 6:
            get_month()
        elif choice == 7:
            get_leap()
        elif choice==0:
            break        
        else:
            print('invalid number!')
                
            
            
datetime_menu()    


with open('log.txt','w' ) as file:
    file.write()       
            
        

