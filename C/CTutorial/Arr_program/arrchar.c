// #include <stdio.h>

// int main(){

//     char  name[5][20];
//     printf("enter your name: ");
//     for(int i=0; i<5; i++){
//         scanf("%s",&name[i]);
//     }
//     printf("Full name printing: ");
//    for(int i=0; i<5; i++){
//     printf("%s\n",name[i]);
//    }
// char name[20];
// printf("enter you name: ");
// scanf("%s",&name);
// printf("you full name printing: ");
// printf("%s",name);

   
   
//     return 0;
    

// }


// int  main(){
//     char name;
//     // printf("Enter you character:\n ");
// while(1)
// {
    


//     printf("Enter you character:\n ");
//     scanf(" %c", &name);
//     if(name == 'a' || name =='e' ||name =='i' ||name=='o' ||name == 'u' 
//         || name =='A' ||name =='E' ||name=='I' || name == 'O'  || name == 'U'){
//             printf("%C is a vowel. \n");
//         }


     
    

    
    
//      else if ( (name >= 'a' && name <= 'z') || (name >= 'A' && name <='Z'))
//         {
//             printf(" %c is constant \n",name);
//             break;
//         }
//         else
//         {
//             printf("\n Invalid number\n ");
//         }
// }  

        
// return 0;
    
// }

#include <stdio.h>
#include<string.h>

// int main(){
//     char str[100],rev[100];
//     int i,len,flag=1;
//     printf("Enter  a string: ");
//     // gtes(str);
//     scanf("%s",str);
//     len=strlen(str);
//     for(int i=0;i<len;i++){
//         rev[i]=str[len-i-1];
//     }
//     rev[len]='\0';

//     if(strcmp(str,rev)== 0){
//         printf("The string is a Palindrome\n");

//     }
//     else{
//         printf("The string is NOT palindrome");
//     }
//     return 0;
// }


// checl vowel and consonant
void checkvowel(){

    char str[200];
    int vowel=0;
    int consonant=0;
    int i=0;

    printf("Enter youe any string: ");

    scanf("%s",str);

    while(str[i]!='\0'){
        char ch =tolower(str[i]);
        

        if(ch >='a' && ch <='z'){
            if(ch == 'a' || ch =='e' || ch == 'i' || ch =='o'|| ch =='u'){
                vowel++;
            }else{
                consonant++;
            }
        }
        i++;

    }
    printf("\n Total Vowels: %d",vowel);
    printf("\n Total consonants: %d",consonant);   
    // return 0;
}

int main(){
    checkvowel();
    return 0;
}