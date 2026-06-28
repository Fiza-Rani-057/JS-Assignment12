//  Question 1 

 document.write( "<h1>" + "Question 1" + "<br>"  + "</h1>");

 var date = new Date();

 document.write(date);

//  Question 2

 document.write( "<h1>" + "Question 2" + "<br>"  + "</h1>");

var currentMonth = date.getMonth();
var months = [
    "January" , 
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

    
 document.write( "<h1>" + "Question 3" + "<br>"  + "</h1>");


 var today = date.getDay();
 var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

 alert("Today is " + days[today]);
 document.write("Alert Message");

//  Question 4 

 document.write( "<h1>" + "Question 4" + "<br>"  + "</h1>");


 var currentWeek = date.getDay();

 if( currentWeek === 0 || currentWeek === 6){
    alert("It's Fun Day");
 }
  document.write("Alert Message");

//   Question 5 

 document.write( "<h1>" + "Question 5" + "<br>"  + "</h1>");

 var currentDays = date.getDate();
  
 if(currentDays <= 15){
    document.write("First Fifteen days of months");
 }
 else{
    document.write("Last Days of Months");
 }

//  Question 6 

 document.write( "<h1>" + "Question 6" + "<br>"  + "</h1>");

 var miliseconds = date.getTime();
 var  minutes = miliseconds / (1000 *6);

 document.write("Current Date:" + date + "<br>");
 document.write("Elapsed Miliseconds since January 1, 1970" + miliseconds + "<br>");
 document.write("Elapsed Minutes since January 1, 1970" + minutes + "<br>" );


//  Question 7 
