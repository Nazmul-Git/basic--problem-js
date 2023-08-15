//  asynchronous way of js
console.log("start");
const p1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
          resolve("1")
        // reject('1')
    },1000)
})

const p2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('2')
    },8000)
})

p1.then(data=>{
    console.log('then1',data);
    return p2;
}).then(data=>console.log('then2',data))
.catch(err=>console.log('error',err))

.finally(()=>console.log('Final after p1 & p2'))

Promise.all([p1,p2]).then(data=>{
    console.log(data);
})

console.log("end");