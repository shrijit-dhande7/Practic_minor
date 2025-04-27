import bcrypt from"bcryptjs"
import jwt from "jsonwebtoken"
import userModal from "../modals/userModal.js"
import transpoter from "../config/nodemailer.js"


// user registration cotroller function
export const register=async (req,res)=>{
    const{name,email,password}=req.body;

    
    if(!name ||!email ||!password){
        return res.json({success:false, message:"Missing details"})
    }

    try{
         //   cheack user is exist or not
         const existinguser=await userModal.findOne({email})
        if(existinguser){ return res.json({success:false, message:"User Already Exist"})}
       
        // encrypt the PW
        const hashedPassword=await bcrypt.hash(password,10);

        // creat new user
        const user =new userModal({name,email,password:hashedPassword})
        await user.save()
  
    //   here we generat the token and send using the cookies
    const token=jwt.sign({id: user._id },process.env.JWT_SECRET,{expiresIn:"7d"});

    res.cookie('token',token,
        {
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:process.env.NODE_ENV==='production'?'none':'strict',
            maxAge:7*24*60*60*1000

        })
        const mailOption={
            from:process.env.SENDER_EMAIL,
            to:email,
            subject:"Welcome to our website",
            text:`Hello ${name} welcome to our website`,
        }
        await transpoter.sendMail(mailOption);

        return res.json({success:true})

    }catch(erroor){
        return res.json({success:false, message:erroor.message})
    }
}

export const login=async (req,res)=>{
    const{email,password}=req.body;

    if(!email ||!password){
        return res.json({success:false, message:"Missing details"})
    }

    try{
   
        const user=await userModal.findOne({email})

        if(!user){
            return res.json({success:false, message:"invalid email"})
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false, message:"Invalid Password"})
        }

        const token=jwt.sign({id: user._id },process.env.JWT_SECRET,{expiresIn:"7d"});
        res.cookie('token',token,
            {
                httpOnly:true,
                secure:process.env.NODE_ENV==='production',
                sameSite:process.env.NODE_ENV==='production'?'none':'strict',
                maxAge:7*24*60*60*1000
    
            })

            return res.json({success:true})
    

    }catch(erroor){
        return res.json({success:false, message:erroor.message})
    }
}

export const logout = async (req, res) => {
    try {
      res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      });
  
      return res.json({ success: true, message: "Logged out successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
// send verification otp to the user email
export const sendVerifyOtp=async (req,res)=>{

    try{
        // we get userId by cookies here we create middlewere function to get userId
        const {userId}=req.body;

        const user=await userModal.findById(userId)

        if(user.isAccountVerified){
            return res.json({success:false,message:"Account is already verified"})

        }

        // generate otp
        const otp=String(Math.floor((Math.random()*900000)+100000))
     
        user.verifyOtp=otp;
        user.verifyOtpExpireAt=Date.now()+24*60*60*1000;
      await user.save();

//  send mail to the user opt
const mailOption={
    from:process.env.SENDER_EMAIL,
    to:user.email,
    subject:"Account Verified OTP",
    text:`your opt is ${otp} `,
}
await transpoter.sendMail(mailOption);

return res.json({success:true ,message:" verification otp send on email"})

    }
    catch(error){
        return res.json({success:false,message:error.message})
    }
}

 export const  verifyEmail=async (req,res)=>{
    const {userId,otp}=req.body;
    console.log(otp);
   if(!userId || !otp){return res.json({success:"false",message:"missing details"})}

    try{
        const user=await userModal.findById(userId)

        if(!user){
            return res.json({success:"false",message:"user is not found"});
        }
 
        if(user.verifyOtp===''|| user.verifyOtp!==otp){
            return res.json({success:"false",message:"invalid otp"})
        }

        if(user.verifyOtpExpireAt<Date.now()){
            return res.json({success:"false",message:"otp is expired"})
        }
        // update user account verified status
        user.isAccountVerified=true;
        await user.save();
        return res.json({success:true,message:"account is verified"})
      

        
    }catch(error){
        return res.json({success:false,message:error.message})
    }
 }

 // check user is login or not
export const isAuthenticated= async(req ,res)=>{
    try{
        return res.json({success: true});

    }catch(error){
        return res.json({success:false,message:error.message})
    }
}
// SEND PW RESET OTP
export const sendResetOtp=async (req,res)=>{
const {email}=req.body;
if(!email){
    return res.json({success:false,message:"email is requierd"})
}
try{
   const user=await userModal.findOne({email})
   if(!user){
    return res.json({success:false,message:"user is not found"})
   }
   const otp=String(Math.floor((Math.random()*900000)+100000))
     
        user.resetOtp=otp;
        user.restOtpExpireAt=Date.now()+15*60*1000;
      await user.save();

//  send mail to the user opt
const mailOption={
    from:process.env.SENDER_EMAIL,
    to:user.email,
    subject:"Password reset  OTP",
    text:`your opt is ${otp} `,
}
await transpoter.sendMail(mailOption);
return res.json({success:true,message:"otp is sent to your email"})

}catch(error){
    return res.json({success:false,message:"error is occure"})
}
}
// reset password

export const resetPassword =async(req,res)=>{
 const {email,otp,newPassword}=req.body;

 if(!email ||!otp || !newPassword){
    return res.json({success:false,message:"email and otp is required"})
 }
 try{
    const user=await userModal.findOne({email})

    if(!user){
        return res.json({success:false,message:"user is not found"})
    }
    if (user.resetOtp === "" || user.resetOtp !== otp){
        return res.json({success:false,message:"invalid otp"})
    }
    if (user.resetOtpExpireAt < Date.now()){
        return res.json({success:false,message:" otp is expired"  })
    }
    
      const hashedPassword=await bcrypt.hash(newPassword,10);
     user.password=hashedPassword;

    user.resetOtp=""
    user.restOtpExpireAt=0;

    await user.save();
    return res.json({ success: true, message: "Password has been reset successfully" });
     
 }catch(error){
    return res.json({success:false,message:"error is occure"})  
 }

}