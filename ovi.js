function sortMaker(arr) {
    
    if (!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid Input";
    }
    if (arr.some(element => element < 0)) {
        return "Invalid Input";
    }

    const sortedArr = [...arr].sort((a, b) => b-a);
    // console.log(sortedArr);

    if (sortedArr[0] === sortedArr[1]) {
        return "equal";
    }
    
    if (arr[1] > 0) {
        return sortedArr;
    }

    
    
    else {
        return sortedArr;
    }
}


console.log(sortMaker([2, 3])); 
console.log(sortMaker([4, 2])); 
console.log(sortMaker([4, 4])); 
console.log(sortMaker([1, 2])); 
console.log(sortMaker([4, -2]));
