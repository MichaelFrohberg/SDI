// Michael C. Frohberg
// SDI 1210
// Project 3
// Objects and Flowchart



var json = {// Setting json Object with Strings, Boolean, Number, and Array properties	
	"myCar": [
		{
			"make": "Toyota",
			"model": "Prius",
			"year": 2007,
			"price": 15000,
			"isEfficient": true,
			"milesPerGallon": [51, 45, 38]
		}
	]
};
var getJson = function (json) { // Global Variables		
	return json;
	};
getJson(); // Returning Object
var prospectiveBuyer = {
	name: "Phil",
	cash: 10000,
	isInterested: function () {
		return true;
		var buyerWants = {
			make: "Toyota",
			model: "Prius",
			years: [2006, 2007, 2008],
		}
	}
};
var interested = function() {
	return prospectiveBuyer.isInterested;
};
var myPrice = function () {
	return json.myCar.price;
};
var buyersCash = function () {
	return prospectiveBuyer.cash; 
var sold = "We have a deal!";
var notSold = "I am not interested.";
var thinking = "I have to think about it.";
var letsTakeALook = function () { // calling Condtional Procedure
	if (myPrice === buyersCash) {
		if (prospectiveBuyer.likesMyCar === true) {
		return;
		}
	} else {
	return;
	};
};
letsTakeALook(); // While Loop + Math + 2 Outputs
var testDrive = function () {
		var i = 35;
		console.log(prospectiveBuyer.name + " says 'My current car only gets 35 miles per gallon");
		while (50 > i); 
			{
			i = i + 4;
			i++;
			}			
console.log(prospectiveBuyer.name + " says 'Wow this car gets " + i + "miles per gallon that's better than my car gets now'");
};
testDrive();
var talkTurkey = function (cash, price) {
		for (var i = cash; i >= price; i++) {
			while (i >= price); 
			{
			return console.log(thinking);		
			};
		};
};
talkTurkey(buyersCash, myPrice)

// I am not completely done, I am looking to make up some of this during next weeks assignment.
