//Task #1

Boolean(Number('10')) + 1; //2
'sub ' + Number(false); //sub 0
16  *  '      91    ' //1456
true-70 // -69
Number(1 + String(1)) + 1 // 12

//Task #2

const numberOfHours = +prompt(`Введи количество часов`, `например 4`);
const numberOfSeconds = numberOfHours * 3600;
alert(numberOfSeconds);

//Task #3 

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
++num;
--num;
alert(num); 