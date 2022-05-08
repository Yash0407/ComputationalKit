function p01() {
   
document.getElementById("check1").checked=false;
document.getElementById("check2").checked=false; 
  
document.getElementById("problem").innerHTML = "<p>This receives two numbers and output their sum.</p>";

document.getElementById("flowchart").setAttribute("src","flowcharts/F1.jpg") ;
document.getElementById("js").setAttribute("src","images/f1.PNG");

var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));
var sum = num1 + num2;
alert("Sum = "+sum);
}

function p02() {
 
      
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

   document.getElementById("problem").innerHTML = "<p>This receives three numbers as sides of triangle and output the area of the triangle.</p>";
   document.getElementById("flowchart").setAttribute("src" , "flowcharts/F2.jpg");
   document.getElementById("js").setAttribute("src" ,"images/f2.PNG");

   var a = parseInt(prompt("Enter a number:"));
   var b = parseInt(prompt("Enter a number:"));
   var c = parseInt(prompt("Enter a number:"));
   
   var p = (a + b + c)/2;
   var area = Math.sqrt(p*(p-a)*(p-b)*(p-c)) ;
    
   alert("Area = "+area.toFixed(2));
}

function p03() {

   document.getElementById("problem").innerHTML = "<p>This receives three numerical cofficients of quadratic equation and outputs its roots.</p>";
   document.getElementById("flowchart").setAttribute("src","flowcharts/F3.jpg");
   document.getElementById("js").setAttribute("src","images/f3.PNG");
   
   var a = parseInt(prompt("Enter a number:"));
   var b = parseInt(prompt("Enter a number:"));
   var c = parseInt(prompt("Enter a number:"));
   
   var d = Math.sqrt(b*b - (4*a*c));
   var r1 = (-b+d)/2*a;
   var r2 = (-b-d)/2*a;

   alert("Root1 = " + r1.toFixed(2) + " Root2 = " + r2.toFixed(2));

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}

function p04() {

   document.getElementById("problem").innerHTML = "<p>This receives three numerical cofficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers.</p>";
   document.getElementById("flowchart").setAttribute("src","flowcharts/F4.jpg");
   document.getElementById("js").setAttribute("src", "images/f4.PNG");

   var a = parseInt(prompt("Enter a number:"));
   var b = parseInt(prompt("Enter a number:"));
   var c = parseInt(prompt("Enter a number:"));

   var d = b*b - (4*a*c);

   if (d>0) {
      alert("It has two distinct roots.");
   } else if(d<0){
      alert("It has no real root.");
   } else{
    alert("Its roots are identical.");
   }

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
}




function p05() {
   document.getElementById("problem").innerHTML = "<p>Maps the percentage to YorkU grading.</p>";
   document.getElementById("flowchart").setAttribute("src","flowcharts/F5.jpg");
   document.getElementById("js").setAttribute("src", "images/f5.PNG");
   var a = parseInt(prompt("Enter the percentage:"));
   switch(true){
      case(a>89):
      answer = "A+";
      break;

      case(a>79):
      answer = "A";
      break;
      
      case(a>74):
      answer = "B+";
      break;
      
      case(a>69):
      answer = "B";
      break;
      
      case(a>64):
      answer = "C+";
      break;
      
      case(a>59):
      answer = "C";
      break;
      
      case(a>54):
      answer = "D+";
      break;
      
      case(a>49):
      answer = "D";
      break;
      
      case(a>44):
      answer = "E";
      break;
      
      default:
         answer = "F";
         break;
   }
   alert("Grade: "+answer);
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}




function p06() {
   document.getElementById("problem").innerHTML = "<p>This receives a number and outputs if a number is Positive or Negative and Button is disabled when number is 0.</p>";
   document.getElementById("flowchart").setAttribute("src","flowcharts/F6.jpg");
   document.getElementById("js").setAttribute("src", "images/f6.PNG");

   var a = parseInt(prompt("Enter a number:"));
   
      if(a>0){
         alert("Positive Number");
      }
      else if(a<0){
         alert("Negative Number");
      }
      else{
         document.getElementById("button").disabled = true;
      }


   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}


var p=0;
var n=0;

function p07() {
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("flowchart").setAttribute("src","flowcharts/F7.jpg");
   document.getElementById("js").setAttribute("src", "images/f7.PNG");

  

   var a = parseInt(prompt("Enter a number:"));
  
   if(a > 0){
      answer = "positive";
      p= p +1;
  }
  else if (a < 0){
     answer = "negative";
     n = n + 1;
  }
  else {
    document.getElementById("butto").disabled = true;
  
    document.getElementById("output").innerHTML= "positive:" + p + "</br>" + "negative:" + n;
  }

}



function p08() {
   ;
   document.getElementById("flowchart").setAttribute("src","flowcharts/F8.jpg");
   document.getElementById("js").setAttribute("src", "images/f8.PNG");

   var a = parseInt(prompt("Enter a number:"));
   
   if(a%3==0){
      if(a%2==0){
         document.getElementById("output").innerHTML = "divisible by 6";
      }
   }
   else{
      document.getElementById("output").innerHTML = "Not divisible by 6";
   }
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}




function p09() {
   document.getElementById("output").innerHTML = "<p>This receive a positive number and output each digit separately. </p>";
   document.getElementById("flowchart").setAttribute("src","flowcharts/F9.jpg");
   document.getElementById("js").setAttribute("src", "images/f9.PNG");

   var a = parseInt(prompt("Enter a number:"));
   var b;
   while(a!=0){
      b = a;
      b = b%10;
      a = Math.floor(a/10);   
      alert(b) ;
   }
   
  
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}




function p10() {

   
   document.getElementById("flowchart").setAttribute("src","flowcharts/F10.jpg");
   document.getElementById("js").setAttribute("src", "images/f10.PNG");

   var a = parseInt(prompt("Enter a number:"));
   var b;
   var counter = 0;
   
   while(a!=0){
    b = a;
    b = b % 10;
    a = Math.floor(a/10);

    if(b == 7){
       counter = counter + 1;
    }

   }

   
   document.getElementById("output").innerHTML = "Output = "+counter +"<br><p>This recieves a number and outputs the number of 7's as digit in it.</p>";
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
}




function p11() {
   
   document.getElementById("flowchart").setAttribute("src","flowcharts/F11.jpg");
   document.getElementById("js").setAttribute("src", "images/f11.PNG");

   var a = parseInt(prompt("Enter a number:"));
   
   var sum = 0;
   var b ;
   while(a!=0){
   b = a;
   b = b % 10;
   a = Math.floor(a/10);
   sum = sum + b;
   }

   document.getElementById("problem").innerHTML ="Sum = "+sum+ "<br><p>This recieves a number and outputs sum of it's digits.</p>";

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}




function p12() {

   document.getElementById("flowchart").setAttribute("src","flowcharts/F12.jpg");
   document.getElementById("js").setAttribute("src", "images/f12.PNG");

   var a = parseInt(prompt("Enter a number:"));
   var b;
   var num = a;
   var reverse = 0;
   while(a!=0){
    b = a;
    b = b % 10;
    a = Math.floor(a/10);
    reverse = (reverse*10 + b);
   }
   if(reverse == num){
      document.getElementById("output").innerHTML ="Answer = Yes" +"<br><p>Checks if number entered is equal to its reverse or not.</p>";
   }
   else{
      document.getElementById("output").innerHTML ="Answer = No" +"<br><p>Checks if number entered is equal to its reverse or not.</p>";
   }

   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
}




function p13() {
   
   document.getElementById("flowchart").setAttribute("src","flowcharts/F13.jpg");
   document.getElementById("js").setAttribute("src", "images/f13.PNG");

   var a = parseInt(prompt("Enter a number:"));
   var Factorial = 0; 
   
   var i = a;
   var n = 1;
   while(n<i){
      a = a*n;
      n = n + 1;
   }
   if(i == 0){
      a = 1;
   }
   
   document.getElementById("output").innerHTML = "Factorial = "+a+"<br><p>This recieves a number and output its Factorial.</p>";
   

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}




function p14() {

   
   document.getElementById("flowchart").setAttribute("src","flowcharts/F14.jpg");
   document.getElementById("js").setAttribute("src", "images/f14.PNG");

   var a = parseInt(prompt("Enter a number:"));
   var last = 1;
   var secondLast = 0;
   var newValue;
   document.getElementById("output").innerHTML = "0,1,";
   for(i = 3; i <= a;i++){
      newValue = last + secondLast;
      secondLast = last;
      last = newValue;

      document.getElementById("output").innerHTML += newValue + "," ;

   }
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
}




function p15() {
   
   document.getElementById("flowchart").setAttribute("src","flowcharts/F15.jpg");
   document.getElementById("js").setAttribute("src", "images/f15.PNG");

   var a = parseInt(prompt("Enter a number:"));
   
   for(i=1; i<=a ; i++){
      for(j = 1; j<=i; j++){
         document.getElementById("output").innerHTML += " XX";
      }
      document.getElementById("output").innerHTML += "<br>";
   }
  
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}



function p16() {
   
   document.getElementById("flowchart").setAttribute("src","flowcharts/F16.jpg");
   document.getElementById("js").setAttribute("src", "images/f16.PNG");

   var num = parseInt(prompt("Enter a number:"));
   var prime = true;
   var d = 2;

   while(prime == true && d <= num/2){
      if(num % d == 0){
         prime = false;
      }
      d = d + 1;
   }
   if(prime == true){
      document.getElementById("problem").innerHTML =num +" is prime"+ "<br><p>This recieves a number and outputs if it's prime or not.</p>";
   }
   else{
      document.getElementById("problem").innerHTML =num +" is not prime"+ "<br><p>This recieves a number and outputs if it's prime or not.</p>";
   }

  
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}



function p17() {
   
   document.getElementById("flowchart").setAttribute("src","flowcharts/F17.jpg");
   document.getElementById("js").setAttribute("src", "images/f17.PNG");

   var sum1 = 0;
   var sum2 = 0;
   for(i=1;i<=4;i++){
      var num = parseInt(prompt("Enter a number:"));
      sum1 = sum1 + num;
   }
   for(i = 1 ; i<=4 ; i++){
      var num = parseInt(prompt("Enter a number:"));
      sum2 = sum2 + num;
   }
   if(sum1==sum2){
      document.getElementById("output").innerHTML = "Yes" + "<br><p>This recieves eight numbers and outputs if the sum of first four numbers is equal to sum of last four numbers.</p>";
   }
   else{
      document.getElementById("output").innerHTML = "No" + "<br><p>This recieves eight numbers and outputs if the sum of first four numbers is equal to sum of last four numbers.</p>";
   }
  
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}



function p18() {
   
   document.getElementById("flowchart").setAttribute("src","flowcharts/F18.jpg");
   document.getElementById("js").setAttribute("src", "images/f18.PNG");

   
   var cnt1 = 0;
   var cnt2 = 0;

   for(i = 1; i<=4; i++){
      var num = parseInt(prompt("Enter a number:"));
      if(num<0){
         cnt1 = cnt1 + 1;
      }
   }
   for(i = 1; i <= 4; i++){
      var num = parseInt(prompt("Enter a number:"));
      if(num>0){
         cnt2 = cnt2 + 1;
      }
   }
   if(cnt1==cnt2){
      document.getElementById("problem").innerHTML ="Yes" + "<br><p>This recieves numbers and outputs if number of positives and negatives are equal or not.</p>";
   }
   else{
      document.getElementById("problem").innerHTML ="No" + "<br><p>This recieves numbers and outputs if number of positives and negatives are equal or not.</p>";
   }
   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}




function p19() {
   
   document.getElementById("flowchart").setAttribute("src","flowcharts/F19.jpg");
   document.getElementById("js").setAttribute("src", "images/f19.PNG");
   document.getElementById("output").innerHTML = "<p>This recieves a number and outputs prime numbers less than input.</p>";
   var num = parseInt(prompt("Enter a number:"));
   for(i=2; i<=num;i++){
      if(prime(i)==true){
         document.getElementById("output").innerHTML += i+",";
      }
   }
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}

function prime(num){
   var flag = true;
   var d;
   for(d = 2; d <= (num/2) && flag == true; d++){
      if(num%d==0){
        flag = false;
      }
   }
   return flag;
}




function p20() {
   document.getElementById("output").innerHTML = "<p>This recieves a number and outputs prime numbers less than input which have 7 as digit in them.</p>";
   document.getElementById("flowchart").setAttribute("src","flowcharts/F20.jpg");
   document.getElementById("js").setAttribute("src", "images/f20.PNG");

   var a = parseInt(prompt("Enter a number:"));
   for(i = 2;i <= a ;i++){
      if(prime(i)==true && has7(i)==true){
        alert(i);
      }
   }
   
  
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;

}

function has7(num){
   var dflag = false;
   var b;
   while(num != 0){
      b = num;
      b = b%10;
      num = Math.floor(num/10);
      if(b==7){
         dflag = true;
      }
   }
   return dflag;
}


function p21(){
   //document.getElementById("problem").innerHTML = "<p>Outputs triangle pyramid of number entered.</p>";
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");
   
   var rows = parseInt(prompt("Enter a number:"));
   for (i = 1;i <= rows; i++) {
     for (j = 1; j <=(rows - i);j++) {
        //alert("&nbsp");
        document.getElementById("output").innerHTML = " a";
     }
     for (k = 1; k <= i ; k++) {
        //alert("*");
        document.getElementById("output").innerHTML = "*";
     }
     //alert("<br>");
    document.getElementById("output").innerHTML = "<br>"; 
   }

   
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
}


function p22(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   var num = parseInt(prompt("Enter a number:"));
   var sum = num;
   var value = num;
   for (i = 1; i<(num-1);i++) {
      for(j = 1; j<= i ; j++){
          sum = sum + value;
      }
      value = sum;
   }
   alert(sum);
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}



function p23(){
   document.getElementById("problem").innerHTML= "<p>Outputs 'a' raised to the power 'b'.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");
   
   var a = parseInt(prompt("Enter a number:"));
   var b = parseInt(prompt("Enter a number:"));

   var result = a;
   var power = a;

   for(i = 1; i < b; i++){
      for(j = 1; j<a ; j++){
         result = result + power;
      }
      power = result;
   }
   alert(result);
   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p24(){
   document.getElementById("problem").innerHTML= "<p>GCD</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");
   
   var a = parseInt(prompt("Enter a number:"));
   var b = parseInt(prompt("Enter another number:"));
   var c ;
   do{
    if (a>b) {
       c = a - b;
       a = c;
    } else {
       c = b - a;
       b = c;
    }
   }while(c != 0 || a == b);
   alert(a); 
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p25(){
   document.getElementById("problem").innerHTML= "<p>Odd digits as 7.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   var count = 0;
   var a = parseInt(prompt("Enter a number:"));
   while(a!=0){
      b = a ;
      b = b%10;
      a = Math.floor(a / 100);
      if(b == 7){
         count = count +1;
      }
   }
   alert(count);
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p26(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p27(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p28(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p29(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p30(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p31(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p32(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p33(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p34(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}





function p35(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p36(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

  
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p37(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}





function p38(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p39(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}




function p40(){
   document.getElementById("problem").innerHTML= "<p>Outputs factorial of input without performing multiplication.</p>" ;
   document.getElementById("flowchart").setAttribute("src" , "");
   document.getElementById("js").setAttribute("src" , "");

   
  
  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false; 

}





function checkUncheck1(){
   if(document.getElementById("check1").checked==true){
      document.getElementById("flowchart").style.display = "inline"; 
   }
   else{
      document.getElementById("flowchart").style.display = "none";
   }
}

function checkUncheck2(){
   if(document.getElementById("check2").checked==true){
      document.getElementById("js").style.display = "inline";
   } else{
      document.getElementById("js").style.display = "none";
   }
}







