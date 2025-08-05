import { UserCircle, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const PostCard = ({ post }) => {

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
                <UserCircle size={40} className="text-gray-400 mr-3" />
                <div>
                    <p className="font-bold text-sm">{post.author.name}</p>
                    <p className="text-xs text-gray-500">Software Engineer • Posted on {
                        new Date(post.createdAt).toLocaleString('en-IN', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                            timeZone: 'Asia/Kolkata'
                        })
                    }</p>
                </div>
            </div>
            <p className="text-gray-800 text-sm mb-4">{post.content}</p>
        </div>
    );
};

export default PostCard;