import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin,  Home, UserCircle, Menu, X, LogIn, UserPlus, LogOut } from 'lucide-react';

// A small, internal component for individual navigation items.
// It's kept in the same file as it's only used by the Navbar.
const NavItem = ({ Icon, text, to }) => (
  <Link to={to} className="relative flex flex-col items-center justify-center text-gray-600 hover:text-black transition-colors duration-200">
    <Icon size={24} />
    <span className="text-xs hidden md:block">{text}</span>
  </Link>
);

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onLogoutClick = () => {
    handleLogout();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 px-6">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/"><Linkedin size={40} className="text-blue-700" fill="currentColor" /></Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavItem Icon={Home} text="Feed" to="/" />
            <NavItem Icon={UserCircle} text="Profile" to="/profile"/>
            <div className="border-l border-gray-300 h-12 flex items-center pl-6 lg:pl-8 space-x-6">
              {isLoggedIn ? (<button onClick={onLogoutClick} className="text-sm font-medium text-gray-600 hover:text-blue-700 flex items-center space-x-2"><LogOut size={20} /><span>Logout</span></button>) : (<><Link to="/login" className="text-sm font-medium text-gray-600 hover:text-blue-700">Login</Link><Link to="/register" className="text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full">Register</Link></>)}
            </div>
          </div>
          <div className="md:hidden flex items-center"><button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button></div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 border-t">
          <div className="flex flex-col space-y-4 pt-4">
            <Link to="/" className="flex items-center space-x-3 text-gray-700 hover:text-black font-medium" onClick={() => setIsMobileMenuOpen(false)}><Home /> <span>Feed</span></Link>
            <Link to="/profile" className="flex items-center space-x-3 text-gray-700 hover:text-black font-medium" onClick={() => setIsMobileMenuOpen(false)}><UserCircle /> <span>Profile</span></Link>
            {isLoggedIn ? (<button onClick={onLogoutClick} className="flex items-center space-x-3 text-gray-700 hover:text-black font-medium text-left w-full"><LogOut /> <span>Logout</span></button>) : (<><Link to="/login" className="flex items-center space-x-3 text-gray-700 hover:text-black font-medium" onClick={() => setIsMobileMenuOpen(false)}><LogIn /> <span>Login</span></Link><Link to="/register" className="flex items-center space-x-3 text-gray-700 hover:text-black font-medium" onClick={() => setIsMobileMenuOpen(false)}><UserPlus /> <span>Register</span></Link></>)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;