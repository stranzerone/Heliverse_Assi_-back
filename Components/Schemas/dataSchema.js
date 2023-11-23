import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    id: {
        unique:true,
        type: String, // Assuming you want to store numeric values for id
        required: true,
    },
    avatar:{
        type:String,
        require:true
    },
    domain:{
        type:String,
        require:true
    },
    available:{
type:Boolean,
required:true
    }
});

export const DataModel = mongoose.model('Data', dataSchema);
