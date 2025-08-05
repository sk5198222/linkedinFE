import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';


function App() {
  const navigate = useNavigate();
  // Initialize state by checking for a token in localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  // This effect runs once on component mount to sync the state
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // This function is passed to the Login component
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    toast.success('Login successful!');
    navigate('/'); // Redirect user to their profile after login
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    toast.success('Logout successful!');
    navigate('/'); // Redirect to home
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn}/>} />
          {/* Here we pass the handleLoginSuccess function to your Login component */}
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
};

export default App;