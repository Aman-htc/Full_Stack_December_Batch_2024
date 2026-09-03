// #include <stdio.h>
// int main(){
//     int   num_1[10]={1,2,34,56,78,7,8,12,34,5};
//     int   num_2[10]={1,2,34,56,78,7,8,12,34,5};
//     int   num_3[10]={1,2,34,56,78,7,8,12,34,5};
//     int   num_4[10]={1,2,34,56,78,7,8,12,34,5};

//     printf("%d  ",num_1[5] + num_2[5] + num_3[5]+ num_4[5]);
//     return 0;
// }

// 

// Jo Arr me data ko dal kar same data nikalna
// #include <stdio.h>

// int main(){

//     int account_number[3];
//     printf("Enter your account number");

//     for (int  i = 0; i <3; i++)
//     {
//     scanf("%d",&account_number[i]);
//     }
//     return 0;
    


// }


// ji arr me date ko dale kar usi arr se dusra data nikalna

// #include <stdio.h>

// int main(){

//     int School[5];


//     printf("Enter you marks: ");
//     for(int i=0;i<5;i++){
//         scanf("%d",&School[i]);
//     }

// printf("You marks repot:\n ");

// for(int i=0;i<5;i++){
//     School[i]=60;
//     // School[0]=50;
//     // School[3]=70;
//     printf( " %d\n",School[i]);
// }

// return 0;
// }




// Ak arr me data ko dal kar dusare arr se nikalna 
// #include <stdio.h>

// int main(){

//     int Scroe[5];
//     int new_Score[5];
//     printf("Enter your Score data: ");
//     for(int i=0;i<5;i++){
//     scanf("%d",&Scroe[i]);
//     }
//     printf("Remove score data same newScore data\n");

//     for (int i=0;i<5;i++){

//         new_Score[i]=Scroe[i];
//         printf("%d\n",new_Score[i]);
//     }

    
//     return 0;

    
// }

// #include <stdio.h>

// int main(){


//     int aman[6];
//     int vishal[6];

//     printf("Enter you data: ");
//     for(int i=0; i <6; i++){
//         scanf("%d",&aman[i]);
//     }
//     printf("Remove aman data and vishal data: \n");
//     for(int i=0; i <6; i++){

//         vishal[i]=aman[i];
//         printf("%d\n",vishal[i]);
//     }
//     return 0;  

    
// }

// int main(){
    // int num[2][3]={{1,2,3}, 
    //              {2,3,5}} ;

    // printf("enter your number: ");

    // for(int i=0 ; i<2; i++){
    //     for(int j=0; j<3; j++){
    //     scanf("%d\n",&num[i][j]);
    //     }

    // }

//     for(int i=0 ; i<2; i++){
//         for(int j=0; j<3; j++){
//         printf("%d\n",&num[i][j]);
//         }

//     }

    

// }


#include <stdio.h>
void aman(){
    int name[20];

    printf("enter your name: ");

    scanf("%s",name);

    printf("your name: ");
    printf("%s",name);



    

}
int main(){

aman();
return 0;
}