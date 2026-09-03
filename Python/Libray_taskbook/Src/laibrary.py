
import json



class Laibaray:
    
    def __init__(self):
        self.path=r"Task_python_library/Src/store_book.json"
        try:
            
            with open(self.path,'r') as file:
        
                self.data_list= json.load(file)
        except Exception as e:
            self.data_list=[]        
        
        
    def add_book(self):
        
        self.list_book=["Paramhans Yoganand",
                        'rich dad and poor dad',
                        'Effective python',
                        'Bhagwat Gita',
                        'Fluent Python',
                        'Python Crash Course'
                        ]
        
        
        # while True:
            
        #     ask_book=input('or add book: (yes/no): ')
        #     if ask_book =="yes":

                
        #         self.data_list[0].append(input('enter your book name: '))
        #     else:
                
        #         break
        
        self.data_list.append(self.list_book)    
        with open(self.path,'w') as file:
            json.dump(self.data_list,file,indent=4)
          
    
    def display_book(self):
        print('Avilable This book')
        
       
        
        with open(self.path,'r') as file:
            self.load_list=json.load(file)
            for item in self.load_list:
                if isinstance(item,list) :
                    
                    print(json.dumps(item,indent=4))
            
class Borrowed(Laibaray):
     
          
    def brook_book(self):
        self.remove={}
        try:
            
            print()
            while True:
                
                self.name=input('please enter your name: ')
                self.__adar_number=(input('please enter your adar number: '))
                if len(self.__adar_number)==11:
                    if self.__adar_number.isdigit():
                        book_name=input('please enter your book name: ')
                        print()
                        self.remove_book =book_name
                        self.data_list[0].remove(self.remove_book)
                        self.remove['Borrow book']=self.remove_book 
                        self.remove['name']=self.name
                        self.remove['adar number']=self.__adar_number
                        self.data_list.append(self.remove)
                        print(f'We are taking the borrow book: {self.remove_book}')
                        print()
                        break
                    else:
                        print('please enter only digit number!') 
                else:
                    print('Enter your correct adar number!')        
                    
                    
            with open(self.path,'w') as file:
                json.dump(self.data_list,file,indent=4) 
       
        except Exception as e:
            print('My library is not this book')    

  
    
    def return_book(self):
        self.add={}
        
              
        while True:
            
            self.name=input('pelase enter your name: ')
            self.__adar_number=(input('please enter your adar number: '))
            if len(self.__adar_number)==11:
                if self.__adar_number.isdigit():
                    
                
                    book_name=input('please enter your book name: ')
                    print()
                    self.add_book=book_name
                    
                    
                    if self.add_book ==   self.remove_book:
                        
                        self.data_list[0].append( self.add_book)
                        self.add['Return  book']=self.add_book
                        self.add['name']=self.name
                        self.add['adar number']=self.__adar_number
                        self.data_list.append(self.add)

                        print(f"Borrow book is return : {self.add_book}")
                    else:
                        print('Return only borrow book !')   
                        print() 
                    
                        

                    break
                else:
                    print('please enter only digit number!')   
            else:
                print(' Enter your correct adar number!')         
        with open(self.path,'w') as file:
            json.dump(self.data_list,file,indent=4)




# class Area:
#     def read(self):
#         print('this is Cricle')               
# class Suuare(Area):
#     def read(self):
#         print('this is Sueare')            
# class Rectangle(Area):
#     def read(self):
#         print('This is rectangle')        
# class Triangle(Area):
#     def read(self):
#         print('This is Triangle')        

# data=Triangle()
# data.read()

       
        
        
        
        