// class Vehicle{
//     constructor(name){
//         this.name=name
//     }
//     getName(){
//         return this.name
//     }
//     setName(name){
//         this.name=name;
//     }
// }

// module.exports= new Vehicle("R1 Bike");

class Vehicle{
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name=name;
    }
}

module.exports= Vehicle;