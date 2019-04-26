/*

  Didn't really follow this one. Mainly because the instructions confused me.
  The syntax confused me less and when I broke the solution down, I totally got the code.

  I get the concept now, kinda. You now created a function that accepts a number as an argument.
  Then it takes a function as a second argument that holds a condition you pass it.
  The condition takes the value as argument. When the condition is true, it will update the value until the
  condition doesn't evaluate to true anymore.

*/

function loop(number, condition, update, func){
	for(let value = number; condition(value); value = update(value)){
    	func(value);
    }
}



loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
