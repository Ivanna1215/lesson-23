function getAge() {
    let age;
    age = +prompt("Input your age"); 
    if (age>0 && age<=12) {
      alert ("You are baby");  
    }

      else if (age>12 && age<=18) {
        alert ("You are teenager");  
      }
         else if (age>18 && age<60) {
        alert ("You are adult"); 
      }
      else if (age>=60 && age<110) {
        alert ("You are pensioner");  
      } 
      else {
        alert ("the code is incorrect");
     };

}
function getSumbol () {
let number;
number= +prompt('Input your number from 1 to 9');
switch (number) {
    case 1:
        alert ("!")
        break;
        case 2:
            alert ("@")
            break;
            case 3:
                alert ("#")
                break;
                case 4:
                    alert ("$")
                    break;
                    case 5:
                        alert ("%")
                        break;
                        case 6:
                            alert ("^")
                            break;
                            case 7:
                                alert ("&")
                                break;
                                case 8:
                                    alert ("*")
                                    break;
                                    case 9:
                                        alert ("(")
                                        break;
    default:
        alert ('This code is incorect')
        break;
}
}

function checkNumber() {
    let number;
    number =+prompt ("Input your three-digit number");
    let a = number % 10;
    let b = Math.floor (number/10)%10; 
    let c = Math.floor (number/100);
    if (a===b || b===c || a===c) {
        alert ("You have same number");  
      } 
   
      else  {
         alert ('You have dont same number');
     };
}

function checkYear() {
    let year;
    year =+prompt ("Input your year");
   

if (year % 400===0 || year % 4 === 0  && year % 100 > 0 ){
    alert ("a leap year"); 
}

     else {
         alert ('low year')
     };
}

function getСonverter() {
    let currency,valuta ;
    currency = +prompt('Input sum in USD');
    // console.log(valuta);
    valuta = +prompt ('Сonvert to EUR input 1 ,UAN-2,AZN-3');
  console.log (currency);
 switch (valuta) {
     case 1 :
        alert (currency*0.88);  
break;
case 2 :
    alert (currency*27.02);
break;
case 3 :
    alert (currency*1.7);
    break;
    default:
        alert ('This code is incorect')
        break;
 }
   
}

function getAmount() {
    let amount;
    amount = +prompt ('Enter the purchase amount');
    if (amount>200 && amount<=300) {
        alert (amount -(amount*0.03));  
      }
      else if (amount>300 && amount<=500) {
        alert (amount - (amount*0.05)); 
      }
      else if (amount>500 && amount>=700) {
        alert (amount - (amount*0.07)); 
      }
      else {
          alert (amount - (amount*0.07));
      }
}

function checkEnglish (){
  let question;
  question=('Complete the sentence with the correct verb forms to be');
  alert (question);
  let questionONe = +prompt ('..... I on time? 1-am,2-is, 3-are');

  switch (questionONe) {
    case 1 :
      alert (questionONe*2); 
break;
case 2 :
  alert (questionONe*0); 
break;
case 3 :
  alert (questionONe*0); 
break;
    default:
      alert (questionONe*0); 
      break;
  }
  let questionTwo = +prompt ('....she there? 1-am,2-is,3-are');
 
  switch (questionTwo) {
    case 1 :
    case 3 :
     alert (questionTwo*0);  
break;
    case 2 :
       alert (questionTwo *1);  
break;

    default:
      alert (questionTwo*0);
      break;
  }
  let questionThree = +prompt ('....they late? 1-am,2-is,3-are');
  switch (questionThree) {

    case 3 :
      alert (questionThree*1); 
break;
 case 1 :
  case 2 :
    alert(questionThree*0);  
break;
    default:
      alert(questionThree*0);
      break;
  }

let result = (questionOne + questionTwo + questionThree);
alert (result);

  }









