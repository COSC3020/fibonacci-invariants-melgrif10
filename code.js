function fib(n) {
    if(n<=0){       //If n is less than or equal to 0
        return [0];     //Just return an array with the element 0
    }
    else if(n==1){      //If n is equal to 1 
        return [0, 1];      //Then return an array with elements 0 and 1
    }
    else{       
        const fibonacciArray = fib(n-1);        //Recursively calculate the fibonacci number up to the (n-1) element. Store it in the new array.
        fibonacciArray.push(fibonacciArray[n-1]+fibonacciArray[n-2]);       //Calculate the nth fibonacci number by adding the two previous numbers and store it in the array.
        return fibonacciArray;      //Return the completed fibonacci array
    }
}

/*This program returns an array with the element zero if n is less than or equal to 0. 
This is because the first number of the fibonacci series has to be 0 to meet the definition of a fibonacci series. 
If n is equal to 1 then the function returns an array with the elements 0 and 1.
This is because the first two numbers of a fibonacci sereis have to be 0 and 1 to meet the definition 
If n is equal to anything else then we can recursively calcuate the fibonacci sereies up to the n-1 element.
We store all those values in an array called fibonacciArray. 
In order to calculate the nth element we add the two previous elements and then add that value to the end of the array.
Then just return the fibonacciArray
*/
