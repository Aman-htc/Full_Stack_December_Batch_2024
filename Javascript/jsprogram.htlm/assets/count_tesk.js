function stringCount(str) {
  
  str = str.toLowerCase();


  const vowels ='aeiou';
  let vowelsCount = 0;
  let consonantCount =0;
  let digitCount=0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    
    
    }else if(char >= 'a' && char <= 'z'){
        consonantCount++;
        
        
    }else if(char >= '0' && char <= '9'){
        digitCount++;
        
    }
  }

  return `this string has ${vowelsCount} vowels, ${consonantCount} consonant, ${digitCount} digits`;


}


let count=stringCount('funstion is block of code 123')
console.log(count)



const count2=function(str){

    str=str.toLowerCase();


    let aman='aeiou';
    let count3=0


    for(let i=0; i <= str.length; i++){
        let char=str[i]

        if(aman.includes(char)){
            count3++;
            console.log(count3)
            console.log(char)

        }
    }



}
count2('aman')

