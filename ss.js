const parentFunction=(arr, fn)=>{
    let newArray=[];
    for(let i=0; i<arr.length; i++){
       newArray.push(fn(arr[i],i)) 
    }
     return newArray;
}
const plusone=(value)=>{
    return value+1;
}
const plusI=(value,i)=>{
    return value+i;
}
const constant=(value)=>{
    return value=42;
}
let arr=[1,2,3];
const result1=parentFunction(arr,plusone);
// console.log(result1);
const result2=parentFunction(arr,plusI);
// console.log(result2);
const result3=parentFunction(arr,constant);
console.log(result3);