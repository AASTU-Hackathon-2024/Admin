import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  CubeIcon, 
  ClipboardDocumentListIcon, 
  ArchiveBoxIcon,
  Cog6ToothIcon, UsersIcon,
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline';

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/', name: 'Dashboard', icon: HomeIcon },
    { path: '/products', name: 'Products', icon: CubeIcon },
    { path: '/orders', name: 'Order Lists', icon: ClipboardDocumentListIcon },
    { path: '/stock', name: 'Product Stock', icon: ArchiveBoxIcon },
    { path: '/users', name: 'Users', icon: UsersIcon },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600">GEBEYA</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
              isActive(item.path) ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.name}</span>
          </Link>
        ))}
        <div className="absolute bottom-0 w-64 mb-8">
          <Link
            to="/profile"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            <Cog6ToothIcon className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </Link>
          <button
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full"
            onClick={() => {/* Add logout logic */}}
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;