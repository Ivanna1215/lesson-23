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
      else if (amount>500) {
        alert (amount - (amount*0.07)); 
      }
      else {
          alert (amount);
      }
}

function checkCircle() {
  let perimetr;
  let length;
  length = +prompt ('Input your length circle');
  perimetr = +prompt('Input your perimetr square');
  let circle;
  let square;
  diameter = length/Math.PI;
  side = perimetr/4;
  if (circle<=side) {
    alert ('Your circle is good');
  } else {
    alert ('Your circle is bad');
  }
  
}




function checkEnglish(){
  let question;
  question=('Complete the sentence with the correct verb forms to be');
  alert (question);
  let questionMain = +prompt ('..... I on time? 1-am,2-is, 3-are');
  let result = 0;
if (questionMain===1) {
result +=2; 
} else {
  result=0;
}

   questionMain = +prompt ('....she there? 1-am,2-is,3-are');
if (questionMain===2) {
  result+=2;
} else {
  result=0;

}

  questionMain = +prompt ('....they late? a-am,b-is,c-are');
if(questionMain===3) {
  result+=2;
} else {
  result=0;
}

alert (`your result  ${result}`);
}
 
function getDate () {
  let day;
  day= +prompt('Input your day');
  let month;
  month = +prompt('Input your month');
  let year;
  year = +prompt('Input your year');
  if ((year % 400===0 || year % 4 === 0  && year % 100 > 0 )&& month===2 && day===28) {
    day+=1;
    month+=0;
alert (`Check N1 ${day}.${month}.${year}`); 

  }
   else if ((year % 400===0 || year % 4 === 0  && year % 100 > 0 )&& month===2 && day===29) {
    day-=28;
    month+=1;
    alert(`Check N2 ${day}.${month}.${year}`);
  }
  else if (month===2, day>=29) {
    month+="Error";
    day-= "Error";
    alert (`Check N2A wrong date`);
  }

  else if (month===2, day===28) {
    month+=1;
    day-=27;
    alert (`Check N3 ${day}.${month}.${year}`);
  }
else if (month===1 && day===31 || month===3 && day===31 || month===5 && day===31 || month===7 && day===31 || month===8 && day===31|| month===10 && day===31 ) {
month+=1;
day-=30;
alert (`Check N4 ${day}.${month}.${year}`);
}
else if (month===4 && day===30 || month===6 && day===30 || month===9 && day===30 || month===11 && day===30 ) {
  month+=1;
  day-=29;
  alert (`Check N5 ${day}.${month}.${year}`);
}
else if  (month===12 && day===31) {
  month -=11;
  day-=30;
  year+=1;
  alert (`Check N6 ${day}.${month}.${year}`);
} 
else if (month>13 || day>31 || day>31 && month>13) {
  month === "Eror";
  day === "Error";
  year === "Error";
  alert (' Check N8 This date does not exist')
}
 else {
  day+=1;
  alert (`Check N7 ${day}.${month}.${year}`);
}


}








