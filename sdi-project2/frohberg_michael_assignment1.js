// alert("JavaScript works!");

// Michael Frohberg
// SDI 1210
// Project 1
// My first attempt at JavasScript

// My variables.
var inaHurry = "I got ready very quickly for the interview";
var thisMorning = "\"Oh my god\" I woke up late!";
var commuteTime = 60;
var carTime = 15;
var trainTime = 30;
var getReadytime = 20;
var byCar = "drive in by car";
var byTrain = " did not take the subway";
var onTime = true;

// Each of my variable's outputs.
console.log("I jumped out of my bed, looked at the alarm and realized " + thisMorning);
console.log(inaHurry);
console.log("but, it still took me " + getReadytime + " minutes to get out the door");
console.log("I only had " + commuteTime + " minutes to get to a very important job interview");
console.log("This left me with two options, I could either: "+ byCar);
console.log("or I could " + byTrain); 
console.log("To " + byCar + " would take " + carTime + " minutes,");
console.log("and to " + byTrain + " would take " + trainTime + " minutes.");

// Wherein I attempt to try and make sense of conditionals.
if (onTime === true) {
	if (commuteTime <= 60){
		commuteTime = 60;
		console.log("I got to my interview on time!");
	} else {
		console.log("I got to my interview late!");
	};

} else {
	if (byTrain === "take the subway") {
		console.log("When I " + byTrain + " I get to the interview on time. ");
	} else {
		byTrain = byTrain + " I did not get to the interview on time";
		console.log("When I" + byTrain);
	};
};