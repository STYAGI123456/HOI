// import rw from "./filesync.js";
// import asyncRW from "./fileasync.js";
import callbackRW from "./filecallback.js";

callbackRW.callbackReader();
callbackRW.callbackWriter();
console.log(callbackRW);

//async writer
//asyncRW.asyncwriter();
//const data = await asyncRW.asyncreader();
//console.log(data);
//console.log(rw);
//rw.syncwriter();
//rw.syncreader();