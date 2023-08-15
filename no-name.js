const loginVerification=(fn, x,y,z)=>{
    const theFunction=fn(x,y,z);
    return theFunction;
}

const user1=(username, pass)=>{
    const name=username.toLowerCase();
    // console.log(name);
    if(typeof(pass)==='number'){
        console.log(pass);
        console.log('Give the strong password');
        // 
        setTimeout(()=>{
            console.log('Suggestions - >',name.concat('',pass)); 
        },5000)

    }else{
        console.log('Done');
    }

}

console.log(loginVerification(user1,'Sunny',123))