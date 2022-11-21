// Sets are great if we want to have uniqueness in our data.
const ids = new Set(["hi","from","set!"]);
console.log(ids.add("good work!"))   //adding the same element as in set no effect
console.log(ids.delete("hi"));//deleting the element not present in the set no effect

//way of accessing 
for(const entry of ids.entries()){  //entry is now a new array of  entries inside ids
console.log(entry[0]);
}