import { UserCircle,  Pencil } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { ImageIcon,X } from "lucide-react";
import { toast } from 'react-toastify';

const CreatePost = ({ onPostCreated }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setError('Post content cannot be empty.');
      return;
    }
    setError('');
    try {
      const token = localStorage.getItem('token');
      
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/posts`, { content }, { headers: { Authorization: token } });
      toast.success('Post created!');
      // Call the parent function to refresh the feed
      onPostCreated();
      // Close modal and reset form
      setIsModalOpen(false);
      setContent('');
    } catch (err) {
      console.error("Failed to create post:", err);
      setError("Failed to create post. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <UserCircle size={48} className="text-gray-400" />
          <button onClick={() => setIsModalOpen(true)} className="flex-grow text-left bg-gray-100 border border-gray-300 rounded-full px-4 py-2 text-gray-500 hover:bg-gray-200">
            Start a post
          </button>
        </div>
        <div className="flex justify-around mt-4 pt-2 border-t">
          <button onClick={() => setIsModalOpen(true)} className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded-md"><ImageIcon size={20} className="text-blue-500" /><span>Photo</span></button>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 p-2 rounded-md"><Pencil size={20} className="text-green-500" /><span>Write article</span></button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">Create a post</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <UserCircle size={48} className="text-gray-400" />
                  <span className="font-bold">{JSON.parse(localStorage.getItem('user')).name}</span>
                </div>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="What do you want to talk about?"
                  className="w-full h-32 p-2 border-none focus:ring-0 resize-none text-lg"
                ></textarea>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <div className="flex justify-end items-center p-4 bg-gray-50 border-t">
                <button type="submit" disabled={!content.trim()} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;