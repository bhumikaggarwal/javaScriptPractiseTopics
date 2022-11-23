let numbers = [2, 4, 6, 8];
const newNumbers = [];
numbers.push(10);
console.log(numbers);
console.log(numbers.unshift(1));
console.log(numbers.splice(0, 1));
console.log(numbers.length);
let filteredNumbers = numbers.filter((number, index, numbers) => {
  return number > 5;
});
console.log(filteredNumbers);
const creatingNumObject = numbers.forEach((number , idx , numbers) => {
    const numbersObject = {index: idx , newNumbers:number }
   newNumbers.push(numbersObject);
})
console.log(newNumbers);
let result = 1 ;
numbers.forEach(number => {
    result *= number;
})
console.log(result);

function findMax(...nums){                          //using rest operator converts incomin values to an array
  for(const num of nums){
    let curMax = nums[0];
    if(num>curMax){
        curMax = num
    }
  }
  return curMax ;
};
console.log(findMax(...numbers));                               //using spread operator here converts an array to list of elements

function findMinMax(...nums){                          //using rest operator converts incomin values to an array
    for(const num of nums){
      let curMax = nums[0];
      let curMin =  nums[0];
      if(num>curMax){
          curMax = num;
      }
      if(num<curMin){
        curMin = num;
      }
    }
    return [curMin , curMax] ;
    
  };
  const [min , max]  = findMinMax(...numbers);  
  console.log(min,max);
