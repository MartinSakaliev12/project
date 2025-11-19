import express from "express"
import connectionDB from "./db.js"
const app = express();


app.use(express.json())

connectionDB()

app.get('/',(req,res)=>{
    res.send("Server is working!")
})


app.listen(3000,()=>{
    console.log("Server is listening on port 3000...")
})