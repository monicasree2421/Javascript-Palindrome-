function isPalindrome(str) {
	let rev = "";
	for (let i = str.length - 1; i >= 0; i--) {
		rev += str[i];
	}
	if (rev == str) {
		document.write(str+" is true<br>");
	} else {
		document.write(str+" is false<br>");
	}
}
let str1 = "racecar";
let str2 = "Rama";
isPalindrome(str1);
isPalindrome(str2);


