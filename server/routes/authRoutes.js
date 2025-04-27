import express from 'express'
import {isAuthenticated, login,logout,register, sendVerifyOtp, verifyEmail,resetPassword, sendResetOtp} from "../controllers/authController.js"
import userAuth from '../middleware/userAuth.js';

const authRouter =express.Router();

authRouter.post('/login',login);
authRouter.post('/register',register);
authRouter.post('/logout',logout);

authRouter.post('/send-verify-otp',userAuth,sendVerifyOtp);
authRouter.post('/verify-account',userAuth,verifyEmail);
// authRouter.post('/is-authenticated',userAuth,isAuthenticated);
authRouter.get('/is-auth',userAuth,isAuthenticated)
authRouter.post('/reset-password',userAuth,resetPassword)
authRouter.post('/send-reset-opt',sendResetOtp)

export default authRouter;



