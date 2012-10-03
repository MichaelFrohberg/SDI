// Michael C. Frohberg
// SDI 1210
// Project 2
// Functions and Loops

// Declare global variables

// All of my string variables
var thisMorning = "\"Oh my god\" I woke up late!";
var inaHurry = "I got ready very quickly for the interview";
var onTime = "I got to my interview on time";
var amLate = "I got to my interview late";
// My number variables
var totalCommuteTime = 60
var time = 0
// my Arrays
commuteTimes = [15, 20, 30];
commuteOptions = ["Car", "Bus", "Train"]

//Procedure
var wakeUp = function(timeOnClock) {
	console.log ("I woke up this morning and realized ");
	if (timeOnClock > 9) {
	console.log(thisMorning);
	} else {
	console.log("I'll have time for breakfast!");
	};
	
} 
// Boolean Function
var myCommute = function(getReadyTime, tripToWork)
	if (getReadyTime + tripToWork < totalCommuteTime) === true {
		return true;
	} else {
		return false;
	}

myCommute(15,42);
};