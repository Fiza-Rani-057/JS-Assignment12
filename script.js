//  Question 1 

document.write("<h1>" + "Question 1" + "<br>" + "</h1>");

var date = new Date();

document.write(date);

//  Question 2

document.write("<h1>" + "Question 2" + "<br>" + "</h1>");

var currentMonth = date.getMonth();
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

alert("Current Month: " + months[currentMonth]);
document.write("Alert Message");

// Question 3 


document.write("<h1>" + "Question 3" + "<br>" + "</h1>");


var today = date.getDay();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

alert("Today is " + days[today]);
document.write("Alert Message");

//  Question 4 

document.write("<h1>" + "Question 4" + "<br>" + "</h1>");


var currentWeek = date.getDay();

if (currentWeek === 0 || currentWeek === 6) {
    alert("It's Fun Day");
}
document.write("Alert Message");

//   Question 5 

document.write("<h1>" + "Question 5" + "<br>" + "</h1>");

var currentDays = date.getDate();

if (currentDays <= 15) {
    document.write("First Fifteen days of months");
}
else {
    document.write("Last Days of Months");
}

//  Question 6 

document.write("<h1>" + "Question 6" + "<br>" + "</h1>");

var miliseconds = date.getTime();
var minutes = miliseconds / (1000 * 6);

document.write("Current Date:" + date + "<br>");
document.write("Elapsed Miliseconds since January 1, 1970" + miliseconds + "<br>");
document.write("Elapsed Minutes since January 1, 1970" + minutes + "<br>");


//  Question 7 

document.write("<h1>" + "Question 7" + "<br>" + "</h1>");

var hours = date.getHours();

if (hours < 12) {
    alert("It's AM");
}
else {
    alert("It's PM");
}
document.write("Alert Message");

//   Question 8 


document.write("<h1>" + "Question 8" + "<br>" + "</h1>");

var laterDate = new Date(2020, 11, 31);

document.write("Last Date:" + laterDate);


//  Question 9 

document.write("<h1>" + "Question 9" + "<br>" + "</h1>");

var ramadanDate = new Date(2015, 5, 18);
var daysPassed = date.getTime() - ramadanDate.getTime();

var daysBtw = Math.floor(daysPassed / 1000 * 60 * 60 * 24);

alert(daysBtw + " days have been passed since 1st Ramadan,2015");
document.write("Alert Message");


//  Question 10 

document.write("<h1>" + "Question 10" + "<br>" + "</h1>");

var begining = new Date(2015, 0, 1);
var seconds = begining.getTime()
var calculate = seconds / 1000;


document.write("Reference date" + begining + "<br>");
document.write(calculate + " seconds has passed since bigining of 2015");


//   Question 11 

document.write("<h1>" + "Question 11" + "<br>" + "</h1>");

var currentDate = new Date();
var now = currentDate.getHours()
currentDate.setHours(now - 1);

document.write(currentDate + "<br>");
document.write("1 hour ago it was " + currentDate);


//  Question 12 

document.write("<h1>" + "Question 12" + "<br>" + "</h1>");

var todayDate = new Date();
var yearsBack = todayDate.getFullYear();
todayDate.setFullYear(yearsBack - 100);

document.write("Current date:" + todayDate + "<br>");
document.write("100 year back, it was " + todayDate);


//   Question 13 


document.write("<h1>" + "Question 13" + "<br>" + "</h1>");

var age = parseInt(prompt("Enter your age"));

var dateToday = new Date();
var currentyear = dateToday.getFullYear();

var birth = currentyear - age;

document.write("Your age is: " + age + "<br>");
document.write("Your birth year is:" + birth);

//  Question 14 

document.write("<h1>" + "Question 14" + "<br>" + "</h1>");

var customer = "ABC Customer";
var date = new Date();
var monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
var currentmonth = monthsName[date.getMonth()];
 var numberOfUnits = 410;
 var chargesPerUnit = 16;
 var latePayment = 350;
 var netAmount = numberOfUnits * chargesPerUnit;
 var grossAmount = netAmount + latePayment;


 document.write( "<h1>" + " K-Electric Bill" + "</h1>");

 document.write("Customer Name:" + "<b>" + customer + "</b>"  + "<br>");
 document.write("Month:"  + "<b>"+ currentmonth  + "</b>" + "<br>");
 document.write("Charges per unit:" + "<b>" + chargesPerUnit  + "</b>" +
     "<br>" +"<br>");

 document.write("Net Amount Payable(Within due date):" + "<b>"  
+ netAmount + "</b>" + "<br>");
 document.write("Late Payment surcharges:" + "<b>" + latePayment
 + "</b>" + "<br>");
 document.write("Gross Amount Payable:" +  "<b>" + grossAmount
  + "</b>" + "<br>");


