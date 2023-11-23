import mongoose from "mongoose";


export const Connect = async(URL)=> {
 try{
    const connected = await mongoose.connect(URL)

    if(connected){
        console.log('database connected');
    }
 }catch(error){
    console.error(error)
 }


}
