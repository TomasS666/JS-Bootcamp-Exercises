/*

 Needed some assitance with this one. Didn't really get the idea of what the author tried to accomplish
 in what looks like a overcomplicated solution.

 When I took a glance at the solution it became more clear. I get the concept of Recursion now and how you should
 be careful with it because it can cause infinite loops like I did myself accidentally.

*/


function isEven(n){
	if(n === 0){
		return true;
	}
	else if(n === 1){
		return false;
	}
	else if(n < 0){
		return isEven(-n);
	}
	else{
		return isEven(n - 2);
	}
}

console.log('Is 25 even?', isEven(25));

console.log('Is 50 even?', isEven(50));

console.log('Is 100 even?', isEven(100));
