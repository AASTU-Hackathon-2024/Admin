import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center">
        <div className="mb-6">
          <div className="w-48 h-32 mx-auto bg-blue-500 rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
              404
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Looks like you've got lost....</h1>
        
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;