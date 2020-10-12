module.exports = function toReadable (number) {
  let stringNumber = "zero";
  
  let stringNumbersHundred = {
      1:"one hundred",
      2:"two hundred",
      3:"three hundred",
      4:"four hundred",
      5:"five hundred",
      6:"six hundred",
      7:"seven hundred",
      8:"eight hundred",
      9:"nine hundred",
      0:"",
  };
  
  
  let stringNumbersTen = {
    0:"",
    2:"twenty",
    3:"thirty",
    4:"forty",
    5:"fifty",
    6:"sixty",
    7:"seventy",
    8:"eighty",
    9:"ninety",
    10:"ten",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen",
  };
  
  let stringNumbersBase = {
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    0:"",
  };
  
  if(!number){
    return stringNumber;
  } else  if(number%100 > 9 && number%100 < 20){
    if(Math.trunc(number/100)){
      stringNumber = `${stringNumbersHundred[Math.trunc(number/100)]} ${stringNumbersTen[number%100]}`;
    }
    else{
      stringNumber = `${stringNumbersTen[number%100]}`;
    }
  }
  else{
    stringNumber = `${stringNumbersHundred[Math.trunc(number/100)]} ${stringNumbersTen[Math.trunc((number%100)/10)]} ${stringNumbersBase[number%10]}`;
  }
  
  return stringNumber.replace("  ", " ").trim();
  };  