import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import EmailVerify from './pages/EmailVerify.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import Header2 from './componants/Header2.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DsaTracker from './componants/DsaTracker.jsx';
import Resume from './componants/Resume.jsx';
import Quiz from './componants/Quiz.jsx';
import Numerical from './pages/Numerical.jsx';
import Reasoning from './pages/Resouning.jsx';
import Verbal from './pages/Verbal.jsx';
import Mathematics from './pages/Mathematics.jsx';
import Technical from './pages/Technical.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Navbar from './componants/Navbar2.jsx';
import Footer from './componants/Footer.jsx';
import { AppContext } from './context/AppContext.jsx';

const App = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <div>
      <ToastContainer />

      {/* Always show Navbar and Footer if user is logged in */}
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/header2" element={<Header2 />} />
        <Route path="/dsatracker" element={<DsaTracker />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/numerical-ability" element={<Numerical />} />
        <Route path="/quiz/reasoning" element={<Reasoning />} />
        <Route path="/quiz/verbal-ability" element={<Verbal />} />
        <Route path="/quiz/technical" element={<Technical />} />
        <Route path="/quiz/mathematics" element={<Mathematics />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      {isLoggedIn && <Footer />}
    </div>
  );
};

export default App;
