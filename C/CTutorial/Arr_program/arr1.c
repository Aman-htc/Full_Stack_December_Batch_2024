// #include <stdio.h>

// int main(){

//   int account[5];
//     int coisier[5];
//     int counter=0;

// printf("Insert the amount\n: ");

// for(int i=0; i < 5; i++){
//     scanf("\n%d",&coisier[i]);
//     if(coisier[i] >= 10 && coisier[i] <=100){

//         account[counter]=coisier[i];

//         counter++;
//     }

// }
// printf("Acepted the counter amount\n");

// for(int i=0; i <counter; i++){
//     printf("%d\n",account[i]);
// }
// return 0;

// }

#include <stdio.h>

// int main()
// {

//     int account[5]={12,13,13,12};

//     int account2[5];
//     int maich = 0;

//     int counter = 0;
//     int flag = 0;

    
    

//     for (int i = 0; i < 5; i++)
//     {
    
//         for (int z = i + 1; z < 5; z++)
//         {

//             if (account[i] == account[z])
//             {
//                 maich = 0;

//                 for (int q = 0; q < 5; q++)
//                 {
//                     if (account[i] == account2[q])
//                     {
//                         flag = 1;
//                     }
//                 }
//             }
//             if (maich == 0 && flag == 0)
//             {

//                 account2[counter] = account[i];
//                 counter++;
//             }
        
//         maich = 1;
//         flag = 0;
//         }
    
//     }


//     for (int i = 0; i < counter; i++)
//     {
//         printf("%d", account2[i]);
//     }

//     return 0;
// }

// int main(){
//     int a[3]={12,23,433};
//     int b[3]={12,34,56};
//     int max;

//     max=a[0];

//     for(int i=0;i<3; i++){

//         if(a[i] > max){
//         max=a[i];
//         }
// }
// printf("%d",a[1]);
//     return 0;
// }

// int main(){
  //    int a[3];
  //    int b[3];
  //  printf("Enter your  number: ");


  //    for(int i=0; i<3; i++){
  //     scanf("%d",&a[i]);
        
  //       b[i]=a[i];
  //       printf("Copay to the a and b");
  //       printf("%d\n",b[i]);
        
        
  //    }

//   aman();
//      return 0;

// }

int main(){
  int choice;
  printf("Enter your choice number: ");
  scanf("%d",&choice);
  switch (choice)
  {
  case 1:
    printf("aman kushwaha");
    break;
  
  default:
  printf("the invalid number: ");
    break;
  }

}

