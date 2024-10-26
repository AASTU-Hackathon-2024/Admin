import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const stats = [
    { title: 'Total User', value: '40,689', change: 8.5, up: true },
    { title: 'Total Order', value: '10293', change: 1.3, up: true },
    { title: 'Total Sales', value: '$89,000', change: 4.3, up: false },
    { title: 'Total Pending', value: '2040', change: 1.8, up: true },
  ];

  const salesData = [
    { name: '5k', value: 30 },
    { name: '10k', value: 45 },
    { name: '15k', value: 35 },
    { name: '20k', value: 50 },
    { name: '25k', value: 90 },
    { name: '30k', value: 45 },
    { name: '35k', value: 50 },
    { name: '40k', value: 60 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-gray-500 text-sm mb-2">{stat.title}</h3>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">{stat.value}</p>
              <div className={`flex items-center ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
                <span className="ml-1 text-sm">{stat.change}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-4">Sales Details</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;