import mongoose from "mongoose";

const { Schema } = mongoose;

const AdminSchema = new Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        min:3,
        max:8
    },
    password:{
        type:String,
        min:6
    }
})

const Admin = mongoose.model('Admin',AdminSchema);

export default Admin;