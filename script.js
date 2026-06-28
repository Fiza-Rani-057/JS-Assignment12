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
    "March", "April"
     ,"May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    alert("Current Month: " + months[currentMonth]);
    document.write("ALert Message");