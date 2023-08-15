var twoSum = function(numbs, target) {
    let sum=0;
    for(let n of numbs){
        sum+=numbs[n];
        if(sum==target){
            return sum;
        }
        else{
            continue;
        }
    }
    
};
console.log(twoSum([2,3,5],5));