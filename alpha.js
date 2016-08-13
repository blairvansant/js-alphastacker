// Create a stackLetters function that should console.log rows of letters. It should take an array containing the letters of the alphabet and output them like this:

// a
// ab
// abc
// abcd
// abcde
// abcdef
// etc
// Then add logic to stackLetters that places a space after every fifth letter, like this:

// a
// ab
// abd
// abcd
// abcde
// abcde f
// etc

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var newAlpha = []	
// function alphaStacker(){
// 	for (var i = 0; i < alphabet.length; i++) {
// 		alphabet[i] 
// 		newAlpha += alphabet[i];
// 		console.log(newAlpha)
// 	}
//
//every fifth letter

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var newAlpha = []	
function alphaStacker(){
	for (var i = 0; i < alphabet.length; i++) {
		if (i%5 === 0){ 
			newAlpha += " " + alphabet[i];
		} else {
			newAlpha += alphabet[i]
		}
		
		
		console.log(newAlpha)



	}
}
alphaStacker()
