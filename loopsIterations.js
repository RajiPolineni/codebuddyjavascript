// level {2}
let num = 6;


function fibonacci(num){
    let arrayList = [0,1];
    for (let i=2 ; i<=num ; i=i+1){
        let number = arrayList[i-1]+arrayList[i-2];
        arrayList.push(number)
    }
    let result= arrayList.reduce((a,v)=>a+v)
    return result;
} 
let result = fibonacci(num);