function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">General Settings</h1>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80  " alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="text-blue-600 hover:text-blue-700">Edit Photo</button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">First Name</label>
            <input
              type="text"
              defaultValue="Kevin"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Last Name</label>
            <input
              type="text"
              defaultValue="Fleming"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Your email</label>
            <input
              type="email"
              defaultValue="jaskolski.brent@yahoo.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="546-933-2772"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Date of Birth</label>
            <input
              type="date"
              defaultValue="1995-11-08"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Gender</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Add Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;