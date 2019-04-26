/*

 Had a pretty hard time with this one. So I read the documentation on reduce() & concat()
 through at MDN Web Docs.

 The follow is happening. The variable arrays is assigned an array containing other arrays.
 Then the reduce method is applied to arrays. The reduce method has multiple parameters,
 but I'm only using the required onces. The accumulator which stores the value after every iteration.
 And the currentvalue which is every item in the array which you iterate over.

 Then we concatenate the currentvalue to the accumulator every iteration.
 Concat produces a new array.

 This all happens in an expression that directly logs to the console.

*/


let arrays = [[323],[1, 2, 3, 3, 23], [4, 5], [6]];
console.log(arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue)));
