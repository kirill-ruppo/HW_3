function maxDigit(n) {
    if(n == 0){ 
        return 0;
    }
  else{
    return Math.max(n%10, maxDigit(Math.floor(n/10)));
  }
}
console.log(`Function 1(Max digit): ${maxDigit(569)}`);



function countLetter(str){
    return str.split('a').length-1;
}
console.log(`Function 2(Count letters): ${countLetter('aaadddaaadddaa')}`);


function convertCurrency(curr){
    if (curr.indexOf('$')){
        return parseInt(curr) * 27.7;
    }
    else if (curr.indexOf('UAH')){
        return parseInt(curr) / 27.7;
        
    }

}
console.log(`Function 3(Converter): ${convertCurrency('100$')}`);

function deleteLetters (letter, str){
    return str.replaceAll(letter, '');
}
console.log(`Function 4(Delete letters): ${deleteLetters('a', 'clablacla')}`);


function genPassword(length, numbers){
    let password = '';
   for(let i = 0; i < length; ++i){
      password += numbers[
          Math.floor(Math.random() * numbers.length)
     ];
   }
   return password;
}
console.log(`Function 5(Random password): ${genPassword(8, "123456789")}`);

function Pow(a, b) {
    let res = a;
    for (let i = 1; i < b; i++) {
      res *= a;
    }
    return res;
  }
console.log(`Function 6(Pow): ${Pow(5, 2)}`);

