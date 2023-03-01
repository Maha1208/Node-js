//  const EventEmitter = require("node:events")

//  const emitter = new EventEmitter()

//  emitter.on("ordering-dress",(size,dress)=>{
//     console.log(`order received! packing a ${dress} in ${size} size packing for shipping`);
//  });
 
//  emitter.on("order-dress",(dress) =>{
//     if(dress==="Kurta"){
//        console.log("Sending Freebies")
//     }
//  });
//  emitter.emit("ordering-dress","XL","Kurta");

const dressShop =  require("./Shop");
const Freebies = require("./Freebie")

const dressShop = new dressShop();
const Freebie = new Freebies();

dressShop.on("order-dress",(size,dress)=>{
    console.log(`order received! packing a ${dress} in ${size} size packing for shipping`);
    Freebie.serveFreebies(dress);

dressShop.order("XL","Kurtas");
dressShop.displayOrderNumber();

