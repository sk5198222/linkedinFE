import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import NewsSidebar from '../components/NewsSidebar';
import ProfileSidebar from '../components/ProfileSidebar';
import CreatePost from '../components/CreatePost';

const Home = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/posts`);
      const data = await response.json();
      setPosts(data);
      console.log(data);

    } catch (err) {
      console.error(err);
      setPosts([]); // Set to empty array on error
    }
  };

  useEffect(() => {
    // Only fetch posts if the user is logged in.
    if (isLoggedIn) {

      fetchPosts();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="text-center p-10 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Mini-LinkedIn</h2>
        <p className="text-gray-600">Please log in to see your feed and connect with your professional network.</p>
        <Link to="/login" className="mt-6 inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-6">
      {/* Left Sidebar */}
      <ProfileSidebar />

      {/* Main Feed */}
      <div className="col-span-1 md:col-span-2">
        <CreatePost onPostCreated={fetchPosts} />
        <div className="space-y-4 mt-4">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">No posts available in your feed.</p>
          ) : (
            posts.map((post) => <PostCard key={post._id} post={post} />)
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <NewsSidebar />
    </div>
  );
};

export default Home;