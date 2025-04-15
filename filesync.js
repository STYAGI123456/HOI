import fs from "fs";
//create file(sync)
const syncwriter = ()=>fs.writeFileSync("./data.csv","This is the sync file");

//read file(sync)
const syncreader = ()=>{
const fileData = fs.readFileSync("./data.csv","utf-8");
console.log(fileData);
}

//append file(sync)
const syncappend = ()=>fs.appendFileSync("./data.csv","\nThis is the line 2");

//data (sync)
const syncdelete = ()=>fs.unlinkSync("./data.csv");
export default{syncreader,syncwriter,syncappend,syncdelete}