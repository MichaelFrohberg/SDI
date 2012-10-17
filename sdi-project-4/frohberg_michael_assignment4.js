// Michael C. Frohberg
// SDI 1210
// Project 4
// Libraries

var myLibrary = function() {

/* I  am using regex to determine proper phone format(###-###-####) 
/\d{3}: means the first 3 values are digits [0-9]
([-]): the "-" in brackets indicates the next value is a dash.
The surrounding parentheses 'remembers' the usage of the dash.
Followed by another \d{3}, (3 more digits) then "\1" recalls a second 				
dash. Finally ending with \d{4} indicating the final 4 digits. */
	
	var isValidNumber = function (p){
		var phoneRegex =  /\d{3}([-])\d{3}\1\d{4}/; 	
			var OK = phoneRegex.exec(p);
				if (!OK) {
					return false; // *Extra Credit* Asssignment 2 Returns 				
				} else {
					return true;
				}
	}

/* In researching proper email format I discovered that RFC822
is the standard which I wanted my regex to adhere to.
My regex will match anything that has 1 or more of letters A-Z upper/lowercase, 
numbers 0-9, the (_),(.),(-) symbols,	then the @ symbol. Followed by the same letter, 			
number, symbol combo, then the (.) "dot sign." Ending with letter or number 2 to 4 
characters */
	
	var isValidEmail = function (x){
		var emailRegex = 
		/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;	
			var OK = emailRegex.exec(x);
				if (!OK) {
					return false;
				} else {
					return true;
				}
	}

// I am using the same RegEx methods, and Boolean Conditionals that I utilized
//in the previous functions. 

	var isValidURL = function (x){
		var urlRegex = 
		/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
			var OK = urlRegex.exec(x);
				if (!OK) {
					return false;
				} else {
					return true;	
				}
	}

/* I using a regex method that finds both the start of a string, and any empty spaces,
uses the replace method, builds out an internal function that replaces (str) with (txt)
uppercase's the 1st character after each space lowercases the remaining substring(s) creating 
a function that will title case any string of words separated by a space */
	
	var spltAndCptlz = function (str){
    return str.replace(/\w\S*/g, function(txt) {
    		return txt.charAt(0).toUpperCase() + 
    			txt.substr(1).toLowerCase();});
    }
/*
*/	
	
	var chngSepartr = function (str){
		return str.replace(/,/g, "and");
	}
/*
*/
	var addDcmlPlc = function (){
	}
/*
*/
	var wthnPrcnt = function (){
	}
/*
*/
	var daysBtwn = function (){
	}
/*
*/
	var rtnNmbr = function (){
	}
/*
*/
	var smllstNmbrGrtrThan = function(){
	}
/*
*/
	var rtrnTtlNmrcVal = function (){
	}
/*
*/
	var orderedArr = function (){
	} 

// 	
		return { 
				"isValidNumber": 				isValidNumber,
				"isValidEmail": 				isValidEmail,
				"isValidURL": 					isValidURL,
				"spltAndCptlz": 				spltAndCptlz,
				"chngSepartr": 					chngSepartr,
				"addDcmlPlc":						addDcmlPlc,
				"wthnPrcnt": 						wthnPrcnt,
				"daysBtwn": 						daysBtwn,
				"rtnNmbr": 							rtnNmbr,
				"smllstNmbrGrtrThan": 	smllstNmbrGrtrThan,
				"rtrnTtlNmrcVal": 			rtrnTtlNmrcVal,
				"orderedArr":						orderedArr
					
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
console.log(newLib.spltAndCptlz("i fell in love with a great woman"));
console.log(newLib.chngSepartr(" Cats , Dogs , Love , Happiness"));

