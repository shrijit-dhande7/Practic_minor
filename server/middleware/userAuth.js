// here we get token  form the cookies and get userId

import jwt from "jsonwebtoken"

const userAuth= async (req ,res ,next)=>{

    const {token}=req.cookies;

    if(!token){
        return res.json({success:false ,message:" not autherised login again"})
    }
    try{
        // decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.id){
            req.body.userId= decoded.id;
        }
        else{
            return res.json({success:false ,message:" not autherised login again"})
        }
  next();
    }catch(error){
        return res.json({success:false ,message:error.message})
    }
}
export default userAuth;