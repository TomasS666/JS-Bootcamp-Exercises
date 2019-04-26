/*
*
* This exercise went better than I expected. I made a vector class with a constructor that creates x and y.
* The plus method takes an object as argument and then returns a new vector object with the values of the instance
* summed up with the values of the object given. Same goes for minus.
*
* I didn't get the length at first. I didn't know where the '5' in the example came from, that is supposed to be logged.
* Then someone told me the difference might be the outcome of pythagoras. So I made an expression that evaluates to the square
* root of two exponents.
*
*/


class vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(obj){
       return new vector( (this.x + obj.x), (this.y + obj.y) );
    }

    minus(obj){
      return new vector( (this.x - obj.x), (this.y - obj.y) );
    }

    get length(){
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

console.log(new vector(1, 2).plus(new vector(2, 3)));

console.log(new vector(1, 2).minus(new vector(2, 3)));

console.log(new vector(3, 4).length);
