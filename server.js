/**
 * This will be staring file of this project
 */

const express= require("express")
const mongoose= require("mongoose")
const app= express()
const server_config= require("./configs/server.config")
const db_config = require("./configs/db.config")
const bcrypt = require("bcryptjs")
const user_model= require("./models/user.model.js")

/**
 * Create an admin user at starting of applicstion
 * if not already present
 */

//connection with mongodb
mongoose.connect(db_config.DB_URL)

const db =mongoose.connection

db.on("error",()=>{
    console.log("Error connecting to mongo db")
})
db.once("open",()=>{
    console.log("Connected to the Database")
    init()
})

async function init(){

    try{
        let user = await user_model.findOne({userId:"admin"})

    if(user){
        console.log("Admin is already present")
        return
       }
    }catch(err){
        console.log("Error while reading the data",err)
    }
    
    try{
        user = await user_model.create({
            name: "Shivani",
            userId:"admin",
            email:"shivaniprasar@gmail.com",
            userType:"ADMIN",
            password: bcrypt.hashSync("Welcome",8)
        })
        console.log("Admin Created",user)

    }catch(err){
         console.log("error while creating the user",err)
    }
    
}

/**
 * Start the Server
 */
app.listen(server_config.PORT,()=>{
    console.log("Server started:", server_config.PORT)
})