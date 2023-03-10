const os = require("os");

console.log(os.arch());
console.log(os.tmpdir());
console.log(os.homedir());
console.log(os.loadavg());
console.log(os.type());
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.release());

let hostname=os.hostname();
console.log("hostname is:",hostname);

let platform = os.platform();
console.log("platform is: ",platform)

let totalmemory =os.totalmem();
console.log("Total memory is bytes: ",totalmemory);

let totalmemory2= os.totalmem();
console.log("Total memory in GB: ",totalmemory2/(1024*1024*1024));

let freememory = os.freemem();
console.log("free memory in GB: ",freememory/(1024*1024*1024))

let cpus = os.cpus();
console.log("cpus:",cpus);
