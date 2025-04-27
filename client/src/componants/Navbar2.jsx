import React, { useContext } from 'react';
import { assets } from "../assets/assets.jsx";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setisLoggedIn, setUserData } = useContext(AppContext);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`);
      if (data.success) {
        navigate('/email-verify');
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
      if (data.success) {
        setisLoggedIn(false);
        setUserData(null);
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className='w-full bg-blue-900 text-white px-4 sm:px-20 py-[1px] flex justify-between items-center border-b border-blue-800 sticky top-0 z-50'>
      {/* Logo and Links */}
      <div className="flex items-center gap-5">
        <div className="bg-blue-800 p-1 rounded">
          <img src={assets.logo} alt="logo" className='w-16 sm:w-20' />
        </div>
        <div className="hidden sm:flex gap-4 text-lg font-semibold">
          <div onClick={() => navigate('/header2')} className="cursor-pointer hover:text-yellow-300">Home</div>
          <div onClick={() => navigate('/about')} className="cursor-pointer hover:text-yellow-300">About</div>
          <div onClick={() => navigate('/Service')} className="cursor-pointer hover:text-yellow-300">Services</div>
          <div onClick={() => navigate('/contact')} className="cursor-pointer hover:text-yellow-300">Contact</div>
        </div>
      </div>

      {/* User Section */}
      {userData ? (
        <div className='relative'>
          <div
            className='w-9 h-9 text-lg flex justify-center items-center rounded-full bg-white text-blue-900 font-bold cursor-pointer'
            onClick={(e) => {
              const dropdown = e.currentTarget.nextElementSibling;
              dropdown.classList.toggle('hidden');
            }}
          >
            {userData.name[0].toUpperCase()}
          </div>

          <div
            className='absolute right-0 top-12 z-10 bg-white text-blue-900 rounded shadow text-sm hidden'
            onMouseLeave={(e) => e.currentTarget.classList.add('hidden')}
          >
            <ul className='list-none m-0 p-2'>
              {!userData.isAccountVerified && (
                <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-blue-100 cursor-pointer'>Verify Email</li>
              )}
              <li onClick={logout} className='py-1 px-2 hover:bg-blue-100 cursor-pointer'>Logout</li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate('/login')}
          className='flex items-center gap-2 border border-white rounded-full px-4 py-1 text-white hover:bg-blue-800 hover:text-yellow-300 text-sm'
        >
          Login <img src={assets.arrow_icon} alt='' className='w-4 h-4' />
        </button>
      )}
    </div>
  );
};

export default Navbar;
