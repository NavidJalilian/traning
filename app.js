const arr = [true, false, false, true, false];
const arr2 = [true, true, false, true, false];
let counter = 0;

arr2.forEach((e) => {
  if (e === true) counter++;
});
console.log(counter);
