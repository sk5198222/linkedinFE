import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle,MapPin } from 'lucide-react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const Profile = ({ isLoggedIn }) => {
  
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      const id = JSON.parse(localStorage.getItem('user')).id;
      if (!id) return;
      setLoading(true);
      setError('');
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/posts/${id}`);
        console.log(res.data);
        console.log(JSON.parse(localStorage.getItem('user')));
        
        setUser(JSON.parse(localStorage.getItem('user')));
        setPosts(res.data);        
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
        setError('Could not load profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn) {
      fetchUserProfile();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="text-center p-10 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h2>
        <p className="text-gray-600">Please log in to view user profiles.</p>
        <Link to="/login" className="mt-6 inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
          Login
        </Link>
      </div>
    );
  }

  if (loading) {
    return <div className="p-4 text-center">Loading profile...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Profile Header Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        {/* Cover Photo */}
        <div className="h-48 bg-gray-300">
            {/* You can replace this with an <img> tag for a real cover photo */}
        </div>
        <div className="p-6 relative">
          {/* Profile Picture */}
          <div className="absolute -top-16 left-6">
            <UserCircle size={128} className="bg-white rounded-full text-gray-400 border-4 border-white" />
          </div>
          
          <div className="pt-16">
            <h1 className="text-3xl font-bold text-gray-900">{user?.name}</h1>
            <p className="text-gray-600 text-sm">Software Engineer</p>
            <p className="text-gray-600 text-sm">Email: {user?.email}</p>
            <p className="text-gray-700 mt-1">{user?.bio}</p>
            <div className="flex items-center text-gray-500 text-sm mt-2">
              <MapPin size={16} className="mr-2" />
              <span>{user?.location || 'India'}</span>
            </div>
            <p className="text-blue-600 font-semibold text-sm mt-1">{user?.connections || 58} connections</p>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Posts</h2>
        {posts?.length > 0 ? (
          posts.map(post => <PostCard key={post._id} post={post} />)
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
            This user hasn't made any posts yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;