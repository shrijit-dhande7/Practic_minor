import userModal from "../modals/userModal.js";

export const getUserData= async(req,res)=>{  
    try{  
        const { userId } = req.body;  

        if (!userId) {  
            return res.json({ success: false, message: "User ID is required" });  
        }  

        const user = await userModal.findOne({ _id: userId }); // ✅ Fixed query format  

        if (!user) {  
            return res.json({ success: false, message: "User not found" });  
        }  

        res.json({  
            success: true,  
            userData: {  // ✅ Fixed key name  
                name: user.name,  
                isAccountVerified: user.isAccountVerified  
            }  
        });  
    } catch(error) {  
        return res.json({ success: false, message: "Error occurred", error: error.message });  
    }  
}