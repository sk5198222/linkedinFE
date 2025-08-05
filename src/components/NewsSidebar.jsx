import { Bell } from "lucide-react";

const NewsSidebar = () => (
    <div className="hidden md:block bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">LinkedIn News</h3>
            <Bell size={18} />
        </div>
        <ul className="space-y-3">
            <li className="text-sm"><a href="https://www.techbooky.com/big-tech-layoffs-hit-100000-jobs-in-2025-amid-ai-automation/" target="_blank" className="font-bold hover:text-blue-600">Big Tech Layoffs hit 100,000 Jobs</a><p className="text-xs text-gray-500">1d ago • 5,028 readers</p></li>
            <li className="text-sm"><a href="https://www.telecomstechnews.com/news/broadcom-debuts-latest-networking-chip-to-link-data-centres-and-speed-ai-workloads/" target="_blank" className="font-bold hover:text-blue-600">Broadcom launches chip to scale AI</a><p className="text-xs text-gray-500">2d ago • 4,123 readers</p></li>
            <li className="text-sm"><a href="https://www.upwork.com/press/releases/the-future-of-remote-work/" target="_blank" className="font-bold hover:text-blue-600">The future of remote work</a><p className="text-xs text-gray-500">3d ago • 9,876 readers</p></li>
        </ul>
    </div>
);

export default NewsSidebar;