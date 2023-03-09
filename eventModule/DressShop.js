const EventEmitter = require("node:events")

class DressShop extends EventEmitter{
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(){
        this.orderNumber++;
        this.emit("order",size,dress);
    }

    displayOrderNumber(){
        console.log(`current order number: ${this.orderNumber}`);
    }
}

module.exports = DressShop;