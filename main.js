var studentid;
let studentname;
var subject;
let payment;

studentid = 1;
studentname='So Phorn';
subject='web';
payment=350;

//formart id
var id = studentid.toString().padStart(4,'0');
//formart number to currency
var paycurrency=payment.toLocaleString("de-de",{
    style:"currency",
    currency:"EUR"
});

console.log("1.My personal studentid is: "+id);
console.log("2.My fullname is: "+studentname);
console.log("3.Study subject is: "+subject);
console.log("4.My payment to school: "+ paycurrency);

document.write("1.My ID is: "+ id +"<br>");
document.write("2.My Name is: "+studentname+"<br>");
document.write("3.Study subject is: "+subject+"<br>");
document.write("4.My payment to school: "+paycurrency+" <br>");

alert("1.My ID is: "+ id +"\n" +
    "2.My Name is: "+studentname+"\n" +
    "3.Study subject is: "+subject+"\n" +
    "4.My payment to school: "+paycurrency+" \n"
);
prompt('Hello So Phorn!');
var username=prompt('1.please enter your name: ');
var group=prompt('2.please input your group: ');
var schoool=prompt('3.please input your school: ');


console.log('My fullname is: '+ username);
console.log('I come from group: '+ group);
console.log('I study at: '+ schoool);