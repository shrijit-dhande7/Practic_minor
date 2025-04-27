 import  React,{ createContext,useState, useEffect} from "react";
import { toast } from 'react-toastify';
import axios from "axios"

 export const  AppContext=createContext()


 export const AppContextProvider =(props)=>{
   axios.defaults.withCredentials=true;

   const backendUrl= import.meta.env.VITE_BACK_URL
   const[isLoggedIn,setisLoggedIn]=useState(false)
   const[userData,setUserData]=useState(null)

const getaAuthState=async ()=>{
  
  try{

    const {data}= await axios.get(`${backendUrl}/api/auth/is-auth`);
   if(data.success){
  setisLoggedIn(true)
  getUserData()
}
  }catch(error){
  toast.error(error.response?.data?.message || "An error occurred.");
}
}

const getUserData=async ()=>{
  
  try{
   
    const {data} = await axios.get(`${backendUrl}/api/user/data`);
    data.success ? setUserData(data.userData) : toast.error(data.message)
}catch(error){
  toast.error(error.message);
 
}
}

  useEffect(()=>{
    getaAuthState()
  },[])

    const value={
        backendUrl,
        isLoggedIn, setisLoggedIn, 
        userData, setUserData,
        getUserData
       
    }
 return (
    <AppContext.Provider value={value}>
  {props.children}
    </AppContext.Provider>
 )
}