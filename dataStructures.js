// level {2}
//problem 1
let inputArrayOne = [1,3,4,6,7,8]

function even(inputArray){
    let newArray= inputArray.filter((num)=>(num%2)===0);
    return newArray;
}
let newArray = even(inputArrayOne);

//problem 2

let inputString="Elie";

function upper(inputString){
    let newString = inputString.toUpperCase();
    return newString;

}
let modifiedString = upper(inputString);

//problem 3

let inputArr = [1, 3, 4, 6, 7, 8, 2, 5];

function max(inputArr){
    return Math.max(...inputArr);
}
let result = max(inputArr);