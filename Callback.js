function greet(name){
    console.log(`Hello ${name}`);
}

function greetEmployee(greetFn){
    const name="Mahalakshmi";
    greetFn(name);
}

greetEmployee(greet);

let numbers=[7,5,8,6,4,2,1,9,3]
console.log(numbers.sort((a,b)=>a-b))
console.log(numbers.sort((a,b)=>b-a))
console.log(numbers.filter(n=>n%2===0))
console.log(numbers.map(n=>n/2))