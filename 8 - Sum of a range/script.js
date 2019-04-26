/*

	The biggest challenge for me was to come up with a solution for the negative value.
	I figured two for loops in a condition might become a bit of overkill.

	I tried to  

*/
function range(start, end, step = 1) {
  let arr = [];

  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
	else{
		for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
	}

  return arr;
}

function sum(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(range(1, 10, 1));

console.log(range(5, 2, -2));

console.log(sum(range(1, 10)));
