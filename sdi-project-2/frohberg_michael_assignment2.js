// Michael C. Frohberg
// SDI 1210
// Project 2
// Functions and Loops

// Declare global variables

// My string variables
var thisMorning = "\"Oh my god\" I woke up late!";
var maybeOnTime = "I might get to my interview on time";
var amLate = "I got to my interview late";
var onTime = "I made it on time!"
// My number variables
var totalCommuteMinutes = 60
var zeroTime = 0
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

// String Function

var takeTheTrain = function (theExpress, theLocal) {
	console.log(theExpress + "I will have 2 minutes to get there," + theLocal + "I will have 8 minutes");
	}

takeTheTrain("By taking the express ", " and if I take the local ");

// Array Function

var getToInterview = function (secondsRemain, materialsForInterview) {
	for (secondsRemain <= 60; secondsRemain--;) {
		console.log("I have " + secondsRemain + " left to get there")
	}
		if (secondsRemain != zeroTime) {
			console.log(onTime)
		} else {
			console.log("Oh My God! I left my " + materialsForInterview[2])
		}
};

getToInterview(120, ["Pen", "Paper", "Resume"]);





