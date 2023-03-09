//process.nextTick
console.log('start');

process.nextTick(() => {
  console.log('first');
});

console.log('second');