/*

 In this exercise I made a function which takes two arguments, x and y.

 Then I declare a variable named ans (short for answer) which holds a ternary operator.
 There is a condition that evaluates to true or false. If x is less than y it evaluates to the first value before the colon.
 If false, it chooses the latter, so y.

 It then returns the value of ans.

*/


function min(x, y){
	let ans = x < y ? x : y;
	return ans;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
