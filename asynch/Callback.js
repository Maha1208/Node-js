function greet(name){
    console.log(`Hello ${name}`);
}

function greetEmployee(greetFn){
    const name="Mahalakshmi";
    greetFn(name);
}

greetEmployee(greet);
