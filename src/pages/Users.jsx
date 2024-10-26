function Users() {
  const users = [
    {
      name: 'Jason Price',
      email: 'kuhlman.jeremy@yahoo.com',
      image: '/user1.jpg'
    },
    {
      name: 'Duane Dean',
      email: 'rusty.botsford@wilfrid.is',
      image: '/user2.jpg'
    },
    {
      name: 'Jonathan Barker',
      email: 'cora.haley@quint.biz',
      image: '/user3.jpg'
    },
    {
      name: 'Rosie Glover',
      email: 'lockman.marques@hotmail.com',
      image: '/user4.jpg'
    },
    {
      name: 'Patrick Greer',
      email: 'pearlie.eichmann@trevion.net',
      image: '/user5.jpg'
    },
    {
      name: 'Darrell Ortega',
      email: 'chaya.shields@terry.info',
      image: '/user6.jpg'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <img
                src={user.image}
                alt={user.name}
                className="w-32 h-32 rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-medium">{user.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{user.email}</p>
              <button className="flex items-center text-blue-500 hover:text-blue-600">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;