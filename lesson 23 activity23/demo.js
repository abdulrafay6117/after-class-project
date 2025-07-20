const a = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

console.log(a[0]);
console.log(a[2]);
console.log(a[3]);
console.log(a[5]);

var  b = ['clock', 'watch', 'timer', 'alarm', 'stopwatch'];
console.log(b[0]);
console.log(b[2]);
console.log(b[3]); 
console.log(b[5]);

var weight = ['false', 'true', 'false', 'true', 'false'];

console.log(a.join('_'));
a.pop();
console.log(a.join('+'));


function sum(a, b){
  return a + b;
}

function average(a, b,){
  return sum(a,b)/2
}


const result = average(13, 26);
console.log(result);

