const fn=(str)=>{
    // str.indexOf('Hello!') === 0 ? str :  `Hello ! ${str}`;
    if(str.indexOf('Hello!')!==0){
       return `Hello! ${str}`;
    }
    return str;
}

console.log(fn('Hi! I am sunny.'));