//modules
// require("./Bike")
// require("./Car") 

// const Vehicle = require("./Vehicles")
//  //module Cache1
//  const Vehicle = require("./Vehicles");
// const Vehicle = require("./Vehicles");
//  console.log(Vehicle.getName());
//  Vehicle.setName("Scooty");
//  console.log(Vehicle.getName());

//  const newVehicle=require("./Vehicles"); //caching remembered
//  console.log(newVehicle.getName());

 //module Cache2
 const Vehicle=require("./Vehicles") 
 const car= new Vehicle("car")
 console.log(car.getName())
 car.setName("Audi")
 console.log(car.getName());

const superBikes=new Vehicle("super Bikes new models");
console.log(superBikes.getName())