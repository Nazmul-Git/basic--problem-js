const newStr=(str)=> {
    
    // if(str.length>3){
    //     const newStr=str.slice(0,3)+str.slice(-3);
    //     return newStr;
    // }else{
    //     return str;
    // }
    return str.length<3 ? str : str.slice(0,3)+str.slice(-3);
   
}
console.log(newStr('abcdef12345'));

