#include <stdio.h>
#include <string.h>



void projetchar(){
    char name;
    while(1){
        printf("Enter you charetor: ");

        scanf(" %c", &name);
        if(name == 'a' ||name == 'e' || name =='i' || name == 'o' || name == 'u'||
            name == 'A' ||name == 'E' || name =='I' || name == 'O' || name == 'U' ){
                printf(" %c is a vowel\n. ");
            }
            else if((name >='a' && name <='z')||(name >= 'A' && name <= 'Z')){
                printf("%c is a charector ", name);
                break;
            }
            else 
            {
                printf("Invalid chrector | Please enter you alphabet\n: ");
            }
            

    }


}

void friend(){
    char ch[20];

    while(1){
        printf("Please enter you my firends name: ");
scanf(" %s",&ch);

if( strcmp(ch, "vishal")== 0 
|| strcmp(ch, "Suraj")== 0  || 
strcmp(ch, "Sanjay")== 0 || 
strcmp(ch, "mukesh")== 0
 || strcmp(ch, "Ranjan")== 0 ||
  strcmp(ch, "vikash")== 0 ||
  strcmp(ch, "dhiraj")== 0 ||
  strcmp(ch, "brijkishor")== 0
  || strcmp(ch, "raja babu")== 0){
    printf("%s is a  my close friends\n: ",ch);


}

else if (strcmp(ch, "Atul")== 0 || strcmp(ch, "Shudhabsu")== 0 ||
 strcmp(ch, "Kulldeep")== 0 ||strcmp(ch, "Karan")== 0 || strcmp(ch, "Ujwal")== 0 ||
 strcmp(ch, "rishabh")== 0){
    printf(" %s is a my brother\n: ",ch);
 }



else{
    printf("This is not my friends:\n ");
}
    }
    
}



int main(){
    // projetchar();
    friend();
    return 0;
}