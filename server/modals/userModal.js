// here we create DB and schema
import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    verifyOtp:{type:String,default:''},
    verifyOtpExpirAt:{type:Number,default:0},
    isAccountVerified:{type:Boolean,default:false},
    resetOtp:{type:String,default:''},
    resetOtpExpirAt :{type:Number,default:0},

})

const userModal= mongoose.models.user|| mongoose.model('user',userSchema);

export default userModal;