// Michael C. Frohberg
// SDI 1210
// Project 2
// Functions and Loops

// Declare global variables

// My string variables
var thisMorning = "\"Oh my god\" I woke up late!";
var maybeOnTime = "I might get to my interview on time";
var amLate = "I got to my interview late";
// My number variables
var totalCommuteMinutes = 60
var time = 0
// my Arrays
var commuteTimes = [15, 20, 30];
var commuteOptions = ["Car", "Bus", "Train"]

//Procedure

var wakeUp = function (timeOnClock) {
	console.log("I woke up this morning and realized ");
	if (timeOnClock > 9) {
	console.log(thisMorning);
	} else {
	console.log("I'll have time for breakfast!");
	};
	
} 
// Boolean Function

var getOut = function (hasShower, hasBreakfast) {
	if (hasShower || hasBreakfast) {
		console.log(maybeOnTime);
	} else if (hasShower && hasBreakfast) {
		console.log(amlate);
		};

}
getOut(true, false)

// Number Function

var tripByCar = function (minutesByCar) {
	while (minutesByCar <= 20) {
		console.log("I have " + minutesByCar + " minutes to get to there, and " + maybeOnTime)
		minutesByCar++;
		}
		if (minutesByCar = 20) {
			console.log("I'd better take the train")
	}
};

tripByCar(15);	



//Not a Boolean Function
/*var myCommute = function (getReadyTime, tripToWork) {
	if ((getReadyTime + tripToWork) <= totalCommuteTime) { 
		return console.log("true") ; 
	} else if (getReadyTime + tripToWork >= totalCommuteTime) {
		return console.log("false") ;
	}
};
myCommute(15, 42);*/
