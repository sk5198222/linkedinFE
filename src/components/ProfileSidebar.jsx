import { UserCircle,Bookmark } from "lucide-react";

const ProfileSidebar = () => (

  <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
    <div className="h-16 bg-gray-200"></div>
    <div className="flex justify-center -mt-10">
      <UserCircle size={80} className="bg-white rounded-full text-gray-400 border-4 border-white" />
    </div>
    <div className="text-center px-4 py-4">
      <h3 className="font-bold text-lg">{JSON.parse(localStorage.getItem('user')).name}</h3>
      <p className="text-gray-500 text-sm">{JSON.parse(localStorage.getItem('user')).bio}</p>
    </div>
    <div className="border-t border-gray-200 px-4 py-3 text-sm text-gray-600">
      <div className="flex justify-between items-center mb-2">
        <span>Connections</span>
        <span className="font-bold text-blue-600">58</span>
      </div>
      <p className="font-bold">Grow your network</p>
    </div>
    <div className="border-t border-gray-200 px-4 py-3">
        <a href="#" className="flex items-center text-sm text-gray-600 hover:bg-gray-100 p-2 rounded-md">
            <Bookmark className="mr-2" size={16} /> My Items
        </a>
        <p className="text-gray-500 text-sm">You don't have any items yet</p>
    </div>
  </div>
);

export default ProfileSidebar;