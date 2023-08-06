const replace=(str)=>{
    if(typeof str !=='string'){
        console.log('input is not string !')
    }
    const firstChar = str.charAt(0);
    // console.log(firstChar);
    const othersChar=str.slice(1) + firstChar;
    return othersChar;
    // console.log(othersChar);

}

const r=replace('abcd');
console.log(r);