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

/* Used the replace function which contains two arguments the first being 
the original separator followed by the regex "/ /" which searches for the given character,
a g which tells the code to look within the entire string , and the second argument is 
the replacement
 */	
	
	var chngSepartr = function (str, newStr){
		return str.replace(/,/g, newStr);
	}

// I used the single step method toFixed to move the decimal point 2 places

	var addDcmlPlc = function (num){
		return num.toFixed(2);
	}

/* I created a function that housed the 3 arguments valOne is the first number
valTwo is the number that valOne is compared to and percentOf I divided valOne
by valTwo then multiplied that by 100 to get the actual percent then compared that two
my percent argument to see if it was within by using the >= operator and returned a boolean */
	
	var fuzzyMatch = function(valOne, valTwo, percentOf){
    var actPrcnt = (valOne / valTwo) * 100
    	if  (actPrcnt >= percentOf) {
    		return true;	
    	} else {
	    		return false
    	}
  }
  
/* I created a function that passed both a start and an end argument. I then
called the Date object which allowed me to use its methods. I parsed two dateStrings
got a rounded difference and divided that number by the number of milliseconds in a day.*/
	
	var daysBtwn = function (start, end){
		var a = new Date(start);
		var b = new Date(end);
			return Math.round((Date.parse(b) - Date.parse(a)) / 86400000);	
	}

// I used the valueOf method to return the primitive value of any given string
	
	var rtnNmbr = function (num){
		return num.valueOf();
	}

/*
*/
	
	var smllstNmbrGrtrThan = function(array, num){
		var arrObj = new Array;
			return
	}

/*
*/
	
	var rtrnTtlNmrcVal = function (array){
		var total = 0;
			var thisVal = parseInt(array[i]);			
			for(var i = 0; i < array.length; i++){
				if(!isNaN(thisVal)){
						total += thisVal;
							return total;
						
					}
			}
	}

/* I create a function and pass through array as the argument I then 
call the Array Object by declaring a variable with the new Array property
which alllows me to call the sort method which sorts the array.  
*/
	
	var orderedArr = function (array){
		var newOrder =  new Array;
			return array.sort();
	} 

// 	
		return { 
				"isValidNumber": 				isValidNumber,  //
				"isValidEmail": 				isValidEmail,	  //
				"isValidURL": 					isValidURL,			//
				"spltAndCptlz": 				spltAndCptlz,   //
				"chngSepartr": 					chngSepartr,    //
				"addDcmlPlc":						addDcmlPlc,    //
				"fuzzyMatch": 					fuzzyMatch,    //   
				"daysBtwn": 						daysBtwn,				//
				"rtnNmbr": 							rtnNmbr,       //
				"smllstNmbrGrtrThan": 	smllstNmbrGrtrThan,
				"rtrnTtlNmrcVal": 			rtrnTtlNmrcVal,
				"orderedArr":						orderedArr //
					
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
console.log(newLib.chngSepartr("Cats , Dogs , Love , Happiness", "and"));
console.log(newLib.addDcmlPlc(17.3));
console.log("Is 18 within 15% of 21 " + newLib.fuzzyMatch(18, 21, 15));
console.log("The string \"33\" = " + newLib.rtnNmbr("33"));
console.log("How many days are between Aug, 6 1981 and Oct, 11 2009? " +
						newLib.daysBtwn("August 6, 1981" , "October 11, 2009") + " days");
console.log(newLib.orderedArr([{"Delta": 4, "Charlie": 3, "Alpha": 1, "Bravo": 2}]));
console.log(newLib.rtrnTtlNmrcVal(["Chickens", 5, 10, 15, 100, "Love"]));