import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', bio: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, formData);
      toast.success('Rregistered successfully! Please log in.');
      navigate('/login');
    } catch (err) {
      console.error('Registration failed:', err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] bg-gray-50 px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Make the most of your professional life</h1>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert"><p>{error}</p></div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 text-sm mb-1" htmlFor="name">Full name</label>
                    <input id="name" name="name" placeholder="First and last name" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-gray-600 text-sm mb-1" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-gray-600 text-sm mb-1" htmlFor="password">Password (6 or more characters)</label>
                    <input id="password" name="password" type="password" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                 <div>
                    <label className="block text-gray-600 text-sm mb-1" htmlFor="bio">Bio</label>
                    <input id="bio" name="bio" placeholder="e.g. Student at MIT" onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <p className="text-xs text-center text-gray-500 pt-2">
                    By clicking Agree & Join, you agree to the LinkedIn <span className="text-blue-600 font-bold hover:underline">User Agreement</span>, <span className="text-blue-600 font-bold hover:underline">Privacy Policy</span>, and <span className="text-blue-600 font-bold hover:underline">Cookie Policy</span>.
                </p>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors">
                    Agree & Join
                </button>
            </form>
            <p className="mt-6 text-center text-gray-600">
                Already on LinkedIn? <Link to="/login" className="font-bold text-blue-600 hover:underline">Sign in</Link>
            </p>
        </div>
    </div>
  );
};

export default Register;