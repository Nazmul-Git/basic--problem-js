const findFile=(str)=>{
    const find=str.slice(str.lastIndexOf('.'));
    return find;
}
const result=findFile('vite.config.jsx');
console.log(result);