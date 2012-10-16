// Michael C. Frohberg
// SDI 1210
// Project 4
// Libraries

var myLibrary = function(){
		/* I  am using regex to determine proper phone format(###-###-####) 
		/\d{3}: means the first 3 values are digits [0-9]
		([-]): the "-" in brackets indicates the next value is a dash.
		The surrounding parentheses 'remembers' the usage of the dash.
		Followed by another \d{3}, (3 more digits) then "\1" recalls a second dash.
		Finally ending with \d{4} indicating the final 4 digits. */
	
	var regex =  /\d{3}([-])\d{3}\1\d{4}/; 
		function isValidNumber(p){
			var OK = regex.exec(p);
			if (!OK) {
				return false;
			} else {
				return true;
			}
		}
			
	
	
	
	
	
	
	
	
	
	
	return {
		"isValidNumber": isValidNumber
	}

};






var newLib = new myLibrary();

console.log("Is 347-525-4218 in valid phone number format? " +
						newLib.isValidNumber("347-525-4218"));
console.log("Is 1234567890 in valid phone number format? " +
						newLib.isValidNumber("1234567890"));


