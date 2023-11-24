import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
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
        type: Number, // Assuming you want to store numeric values for id
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
    },
    head:{
        type:String,
        require:true
    },
    teamName:{
        type:String
    }
});

export const TeamModel = mongoose.model('Data', teamSchema);
