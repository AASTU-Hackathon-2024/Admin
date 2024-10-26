function Orders() {
  const orders = [
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-800',
      'Processing': 'bg-purple-100 text-purple-800',
      'Rejected': 'bg-red-100 text-red-800',
      'On Hold': 'bg-orange-100 text-orange-800',
      'In Transit': 'bg-pink-100 text-pink-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Order Lists</h1>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4 mb-6">
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center">
            Filter By
          </button>
          <select className="px-4 py-2 border rounded-lg">
            <option>Date</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>Order Type</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>Order Status</option>
          </select>
          <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
            Reset Filter
          </button>
        </div>

        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">NAME</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">ADDRESS</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">DATE</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">TYPE</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-6 py-4 text-sm">{order.id}</td>
                <td className="px-6 py-4 text-sm">{order.name}</td>
                <td className="px-6 py-4 text-sm">{order.address}</td>
                <td className="px-6 py-4 text-sm">{order.date}</td>
                <td className="px-6 py-4 text-sm">{order.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;