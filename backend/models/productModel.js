const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");
const { type } = require("os");
const { TbPng } = require("react-icons/tb");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Name of Product"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"]
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Product Category"],

    },
    stock:{
        type:Number,
        required:[true,"Please Enter product Stock"],
        maxLength:[4,"Stock cannot exceed 1000"],
        default:1
    }
    
})

module.exports = mongoose.model("Product",productSchema);