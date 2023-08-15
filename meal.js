// main
// ------------------------------------------------
const mainFunction=(fn,x,y,z,o)=>{
    const getFromFunction=fn(x,y,z,o);
    return getFromFunction;
}
// ------------------------------------------------
const monthlyExpense=(houseRent,food,bill,others)=>{
    const totalExpense=houseRent+food+bill;
    return totalExpense;  
}

const personMealTKCount=(mealTotal,mealRate)=>{
    const totalMeal=mealTotal * mealRate;
    return totalMeal;
}
const mealRateCount=(allMeal,allFoodExpense)=>{
    const rate=Math.round(allFoodExpense/allMeal);
    return rate;
}


console.log('Meal Rate :=',mainFunction(mealRateCount,360,15000));
console.log('My Meal cost :=',mainFunction(personMealTKCount,60,41));
console.log('My total cost :=',mainFunction(monthlyExpense,3100,2700,600));