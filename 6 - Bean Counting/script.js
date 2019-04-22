/*

CountBS takes a string as argument, declares a counter variable.
Then loops through the characters of the string and if one of the
characters is strict equal to a uppercase 'B', the counter variable is the current value plus one.

After the loop I return the counter variable.

The same as the second function. The only thing I changed here is that I gave the function a second
parameter named c (for character). Then for every loop iteration I compare a character with the second argument.

*/


function countBs(s){
	let counter = null;

	for(let i = 0; i < s.length; i++){
		if (s[i] === 'B'){
			counter++;
		}
	}

	return counter;

}

function countChar(s, ch){
	let counter = null;

	for(let i = 0; i < s.length; i++){
		if (s[i] === ch){
			counter++;
		}
	}

	return counter;

}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));
