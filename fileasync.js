import fs from "fs/promises";

const asyncwriter = async ()=>{
    try {
        await fs.writeFile("./datasync.csv","This is the async file.");
        console.log("File has been written successfully.(async)");

    } catch (error){
        console.log("Error reading",error);

    }
 
}
//export default {asyncwriter,asyncreader};
//const data = await asyncreader();
//console.log(data);
