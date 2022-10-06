myMsg = "hi";
var now = new Date();
var night = true; // this doesn't do anything yet. probably ever. i know, i know.
const pText = document.getElementById("p1");

//please don't bully me about how many if statements i'm using here
//feedback is obviously appreciated just be nice please ok thanks
if (now.getHours() < 2) myMsg = "Go to bed!";
else if (now.getHours() < 3) myMsg = "THE WITCHING HOUR IS AT HAND.";
else if (now.getHours() < 5) myMsg = "Hey there, early bird!";
else if (now.getHours() <= 11) myMsg = "Good mornin'!";
else if (now.getHours() < 13) myMsg = "Lunchtime!";
else if (now.getHours() < 17) myMsg = "Good afternoon!";
else if (now.getHours() < 21) myMsg = "Good evening!";
else if (now.getHours() < 24) myMsg = "Good night!";
else myMsg = "i have no idea what time it is lmao";

pText.innerHTML = myMsg;
