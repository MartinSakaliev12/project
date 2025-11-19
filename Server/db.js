import mongoose from "mongoose"

export default async function connectionDB(){
    try{
        mongoose.connect('mongodb://localhost:27017/Nexo');
        console.log("Connected to db successfuly!")
    }catch(err){
        console.log(err)
    }
}