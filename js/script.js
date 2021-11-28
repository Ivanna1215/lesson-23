function getAge() {
    let age;
    age = +prompt("Input your age"); 
    if (age>0 && age<=12) {
      alert ("You are baby")  
    };
    if (age>12 && age<=18) {
        alert ("You are teenager")  
      };
      if (age>18 && age<60) {
        alert ("You are adult")  
      };
      if (age>=60 && age<110) {
        alert ("You are pensioner")  
      } 
      else {
        alert ("the code is incorrect")
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
    if ("a=b || b=c || a=c") {
        alert ("You have same number")  
      }
     
      else{
        alert ("You do not have the same digits")
    };

   
}