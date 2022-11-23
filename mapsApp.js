const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);
console.log(personData.get(person1));
personData.set(person2, [{ date: "two weeks ago", price: 100 }]);
console.log(personData);
for (const key of personData.keys()) {
  console.log(key);
}
for (const value of personData.values()) {
    console.log(value);
  }
  for (const entry of personData.enteries()) {
    console.log(entry);
  }
   