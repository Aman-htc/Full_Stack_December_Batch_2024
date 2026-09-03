#include <stdio.h>

int main()
{
    int a;

    while(1)
    {
    printf("Enter a:");
    scanf("%d", &a);
    
  
  
    
  
    

    switch (a)
    {

    case 1:
        printf("this is one number\n");
        printf("Enter a:");
        scanf("%d", &a);
        
        
        // break;

    case 2:
        printf("this is two number \n");
        printf("Enter a:");
        scanf("%d", &a);
        
       
        // break;

    case 3:
        printf("This is three number \n");
        printf("Enter a:");
        scanf("%d", &a);
        
       
        // break;

    case 4:
        printf("This is four number \n");
        printf("Enter a:");
        scanf("%d", &a);
        
       
        // break;

    default:
        printf("Please Enter a valid number\n");
        printf("Enter a:");
        scanf("%d", &a);
        
       
        
    
    }
    break;
}

    return 0;
}