//Immediate Invoke Function Expression
(function(){
   const vehicle="Bike";
   console.log(vehicle);
})();

(function(){
   const vehicle="CAR";
   console.log(vehicle);
})();

//Module wrapper(paramters and arguments)
(function(message){
    const name="maha";
    console.log(message,name);
 })('Hi');
 
 (function(message){
    const name="Lakshmi";
    console.log(message,name);
 })('Hello');