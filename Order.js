const DressShop =  require("./DressShop");
const Freebies = require("./Freebie")

const dressShop = new DressShop();
const freebies = new Freebies();

dressShop.on("order",(size,dress)=>{
    console.log(`order received! packing a ${dress} in ${size} size packing for shipping`);
    freebies.serveFreebies(size);
});

dressShop.order("large","kurtas");
dressShop.displayOrderNumber();

// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-dress",(size,dress)=>{
//    console.log(`order received! packing a ${dress} in ${size} size packing for shipping`);
// });

// emitter.on("order-dress",(size) =>{
//    if(size==="large"){
//       console.log("Sending freebies ");
//    }
// });

// console.log("Do work before event occurs in the system")
// console.log("-------------------------------------------------")
// emitter.emit("order-dress","large","Kurta");
