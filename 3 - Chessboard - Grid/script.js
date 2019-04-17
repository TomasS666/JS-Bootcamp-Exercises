/*

  Couldn't quite figure this one out all the way. So I peaked at the solution provided by
  Equolant JS (source below) to get the idea of the loop inside a loop. Then I made a function
  out of it which is able to generate the chessboard once you enter the arguments.

   Source of inspiration because I couldn't figure it out anymore:
   https://eloquentjavascript.net/code/#2.3

*/

function grid(x, y){
  x = x * 2;
  let board = '';
  for(let z = 0; z < y; z++){
    for(let i = 0; i < x; i++){
      if((i + z) % 2 === 0){
        board += ' ';
      }
      else{
        board += '#';
      }
    }
    board += '\n';
  }
  console.log(board);
}

grid(8, 8);


/*
================================================
=== Tomas Stolp  |  Stu.nr: 500785026  |  PT ===
================================================
*/
