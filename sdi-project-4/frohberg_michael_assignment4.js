// Michael C. Frohberg
// SDI 1210
// Project 4
// Libraries

//Strings:
// Does a string follow a 123-456-7890 pattern like a phone number?

var isValidNumber = function (phoneNumber) { 
		if (phoneNumber.length === 12) {
			if (phoneNumber.indexOf("-") === phoneNumber.charAt(3)) {
				if (phoneNumber.lastIndexOf("-") === phoneNumber.charAt(7)) {
					return console.log("You have a valid phone number pattern.");
					}
				} else {
					return console.log("You have an invalid phone number pattern.");
					}
		}
};
isValidNumber("123-456-7890");

