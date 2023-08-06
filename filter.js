const filter = (arr, fn) =>{
    let newArr=[];
    for(const i of arr){
        if(fn(i,i)){
            newArr.push(i);
        }
    }
    return newArr;
};

const greaterThan10=(n)=>{  
      return n>10;
}

const firstIndex=(n,i)=>{
    return i===0;
}
let arr = [0,10,20,30];
const result1=filter(arr, greaterThan10);
// console.log(result1);
let arr2=[1,2,3];
const result2=filter(arr2,firstIndex);
console.log(result2);