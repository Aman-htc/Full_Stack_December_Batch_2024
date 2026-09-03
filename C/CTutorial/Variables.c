// What is Variables
// A Variable is contener That is store a value this is very
// similar contner use to store rise and water

// #include <stdio.h>

// int main(){
//     int a=10;
//     int b=12;
//     int c=40;

//     printf("%d\n %d\n %d",a ,b ,c);
//     return 0;
// }

// Data type in c

// #include <stdio.h>

// int main(){
//     // int a;
//     // a=10;
//     int a=10;
//     printf("%d\n",a);

//     // float b;
//     // b=43.9;
//     float b=40.9;
//     printf("%f",b);

//     // char c='amn';
//     // char c='visahl';

//     return 0;

// }

// #include <stdio.h>

// int main(){
//     int num;
//     printf("Creat banck account enter you number");
//     scanf("%d",&num);
//     if(num >=1 || num <=11) {
//         printf("account seccesfull%d\n",num);

//     }else{
//         printf("please inter you valid number");

//     }
//     return 0;./

// }
// #include <stdio.h>
// #include <string.h>

// int main(){
    //  char num[20];
    //  while(1){
    //     printf("Creat a back acount enter your 11 digits number");
    //     scanf("%s",num);
    //     if(strlen(num)==11){
    //         printf("Account successfully created with number %s:",num);
    //         break;
    //     }
    //     else{
    //         printf("please enter you valid number\n");
    //     }

//      }
//      return 0;
// while (1){
//     printf("Creat a bank accoun enter you 11 digits number:");
//     scanf("%11d",&num);
//     if(){
//         printf("Account successfully creat with number %11d :",&num);
//         break;
//     }

// else
// {
//     printf("please enter a valid number");
// }


#include <stdio.h>

int main()
{
    int choice;
    long long Creatacountnumber;
    char creataccountname;
    float deposit;

    // char creat_acount[20];

   while(1){

    printf("======Simple Banking System======\n");

    printf("==============================\n");
    printf("1. Create a bank Account..\n");
    printf("2.  Deposit Money..\n");
    printf("3. Wihdraw Money..\n");
    printf("4. Check Balance..\n");
    printf("5. View Account Details.. \n");
    printf("6.Exits..\n");
    printf("==============================\n");

    printf("Please enter you choice number : ");


    
    
        // printf("Please enter you choice number :");
        
      if( scanf("%d", &choice)!=1){
        printf("\n Invalid input Please enter your number: ");
        while (getchar()!='\n');
        
            
        continue;
        
      }
      printf("\nPlease enter you choice number: ");
      

        if (choice == 1)
        {
            printf("\nCreate a banck Account\n");
            
            
        }
     
        else if (choice == 2)
        {
            printf(" \n  Deposit Money \n");
        }
        else if (choice == 3)
        {
            printf("\n  Withdraw Money\n");
        }
        else if (choice == 4)
        {
            printf("\n Check balance.\n");
        }
        else if (choice == 5)
        {
            printf(" \n View Account  Details.\n");
                
        }
        else if (choice == 6)
        {
            printf(" \n  Exiting.... thank you!");
            break;
        }
        else
        {
            printf(" \n Invalid Choice Please try again!\n ");
        }
    }
    return 0;
}

