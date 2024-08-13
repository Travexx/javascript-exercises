const sumAll = function(int1, int2) {
    let sum=0;

    //Check type to make sure they are positive numbers and only integers
    if ((int1 <0 || int2 <0) || 
        (typeof int1 !== 'number' || typeof int2 !== 'number') ||
        (!Number.isInteger(int1) || !Number.isInteger(int2))){
        return "ERROR"
    }

    //If int1 is larger than int2, swap order
    else if(int1 > int2) {
        [int1, int2] = [int2, int1];
    }
    //start the loop at int1 value, itterating up 1 value to int2 value.
    //add totals to the sum to accumulate value
    for(let i= int1; i <= int2; i++){
        sum+= i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

