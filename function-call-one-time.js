const once=(fn)=>{
    let isCalled=false;
    return (...args)=>{
         if(isCalled){
            return;
         }
         else{
            isCalled=true;
            return fn(...args);
            
         }
    }
}
const fn=(a,b,c)=>a+b+c;

const onceFnc=once(fn);
const output=onceFnc(1,2,3);
const output2=onceFnc(5,6,7);
console.log(output);
console.log(output2);
