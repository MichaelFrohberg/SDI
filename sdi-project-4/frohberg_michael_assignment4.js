// Michael C. Frohberg
// SDI 1210
// Project 4
// Libraries

var myLibrary = function(){
			/* I  am using regex to determine proper phone format(###-###-####) 
			/\d{3}: means the first 3 values are digits [0-9]
			([-]): the "-" in brackets indicates the next value is a dash.
			The surrounding parentheses 'remembers' the usage of the dash.
			Followed by another \d{3}, (3 more digits) then "\1" recalls a second 				
			dash. Finally ending with \d{4} indicating the final 4 digits. */
	var phoneRegex =  /\d{3}([-])\d{3}\1\d{4}/; 
		function isValidNumber(p){
			var OK = phoneRegex.exec(p);
			if (!OK) {
				return false;
			} else {
				return true;
			}
		}
			/* In researching proper email format I discovered that RFC822
			is the standard which I wanted my regex to adhere to.
			My regex will match anything that has 1 or more of letters A-Z upper/lowercase, 
			numbers 0-9, the (_),(.),(-) symbols,	then the @ symbol. Followed by the same letter, 			number, symbol combo, then the (.) "dot sign." Ending with letter or number 2 to 4 					characters */
	var emailRegex = 
	/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;	
		function isValidEmail(x){
			var OK = emailRegex.exec(x);
			if (!OK) {
				return false;
			} else {
				return true;
			}
		}
			/*
			*/
	var urlRegex = 
	/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		function isValidURL(x){
			var OK = urlRegex.exec(x);
			if (!OK) {
				return false;
			} else {
				return true;	
				}
			}
	
	
			return {
					"isValidNumber": isValidNumber,
					"isValidEmail": isValidEmail,
					"isValidURL": isValidURL
					}
};

var newLib = new myLibrary();

console.log("Is 347-525-4218 in valid phone number format? " +
						newLib.isValidNumber("347-525-4218"));
console.log("Is 1234567890 in valid phone number format? " +
						newLib.isValidNumber("1234567890"));
console.log("Is michaelfrohberg@fullsail.edu a valid email address " +
						newLib.isValidEmail("michaelfrohberg@fullsail.edu"));
console.log("Is johnAtAolDotCom a valid email address " +
						newLib.isValidEmail("johnAtAolDotCom"));
console.log("Is http://google.com a valid URL " + 
						newLib.isValidURL("http://google.com") );
console.log("Is http.iLikeFlowersDot.Com a valid URL " +
						newLib.isValidURL("http.iLikeFlowersDot.Com"));

