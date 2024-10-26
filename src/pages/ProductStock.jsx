import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

function ProductStock() {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: '$690.00',
      piece: 63,
      colors: ['black', 'gray', 'pink']
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: '$690.00',
      piece: 63,
      colors: ['black', 'gray', 'pink']
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: '$690.00',
      piece: 63,
      colors: ['black', 'gray', 'pink']
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: '$690.00',
      piece: 63,
      colors: ['black', 'gray', 'pink']
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: '$690.00',
      piece: 63,
      colors: ['black', 'gray', 'pink']
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: '$690.00',
      piece: 63,
      colors: ['black', 'gray', 'pink']
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: '$690.00',
      piece: 63,
      colors: ['black', 'gray', 'pink']
    },
    
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Product Stock</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search product name"
            className="pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Image</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Piece</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Available Color</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg" />
                </td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.piece}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductStock;