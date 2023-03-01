const EventEmitter = require("node:events")

class dressShop extends EventEmitter{
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(){
        this.orderNumber++;
        this.emit("order-dress",size,dress);
    }

    displayOrderNumber(){
        console.log(`current order number: ${this.orderNumber}`);
    }
}

module.exports = dressShop;