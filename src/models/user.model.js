import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const User = mongoose.model("User",userSchema)