const getDateToday=(date=new Date())=>{
    const days=date.getDate();
    const months=date.getMonth();
    const years= date.getFullYear();
    return `${days}/ ${months}/ ${years}`
}
console.log(getDateToday());