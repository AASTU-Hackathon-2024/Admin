import { PlusIcon } from '@heroicons/react/24/solid';
import phone from '../assets/OveLight.webp'

function Products() {
  const products = [
    {
      id: 1,
      name: 'Apple Watch Series 4',
      image: phone,
      price: '$120.00'
    },
    {
      id: 1,
      name: 'Apple Watch Series 4',
      image: phone,
      price: '$120.00'
    },
    {
      id: 1,
      name: 'Apple Watch Series 4',
      image: phone,
      price: '$120.00'
    },
    {
      id: 1,
      name: 'Apple Watch Series 4',
      image: phone,
      price: '$120.00'
    },
   
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-blue-600 font-medium mt-2">{product.price}</p>
              <button className="w-full mt-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                Edit Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;