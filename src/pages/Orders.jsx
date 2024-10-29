import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/order/list")
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch orders");
        }
        return response.json();
      })
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleUpdateStatus = async () => {
    try {
      const response = await fetch(`http://localhost:8000/order/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
          orderId: selectedOrder.id,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update order status");
      }

      const result = await response.json();
      alert(result.message);

      // Update the status in the state
      setOrders(
        orders.map((order) =>
          order.id === selectedOrder.id
            ? { ...order, status: newStatus }
            : order
        )
      );
      setSelectedOrder(null);
      setNewStatus("");
    } catch (error) {
      alert(error.message);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      COMPLETED: "bg-green-100 text-green-800",
      PROCESSING: "bg-purple-100 text-purple-800",
      REJECTED: "bg-red-100 text-red-800",
      "ON HOLD": "bg-orange-100 text-orange-800",
      "IN TRANSIT": "bg-pink-100 text-pink-800",
      PENDING: "bg-yellow-100 text-yellow-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Order Lists</h1>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                User ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Product ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Variation ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Shipping Address
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Zipcode
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-6 py-4 text-sm">{order.id}</td>
                <td className="px-6 py-4 text-sm">{order.userId}</td>
                <td className="px-6 py-4 text-sm">{order.productId}</td>
                <td className="px-6 py-4 text-sm">{order.variationId}</td>
                <td className="px-6 py-4 text-sm">{order.amount}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{order.shippingAddress}</td>
                <td className="px-6 py-4 text-sm">{order.zipcode}</td>
                <td className="px-6 py-4 text-sm">{order.phone}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setNewStatus(order.status);
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Update Order Status</h2>
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-4"
            >
              <option value="PENDING">Pending</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="SHIPPED">Shipped</option>
              <option value="DELIVERED">Delivered</option>
            </select>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateStatus}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
