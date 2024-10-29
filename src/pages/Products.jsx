import { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/products/list')
      .then(async response => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:8000/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete product');
      }

      const result = await response.json();
      alert(result.message);

      // Remove the deleted product from the state
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Link to={`new`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            New
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => {
          const imgUrls = JSON.parse(product.variations[0].imgUrl);
          return (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="w-full h-48 overflow-hidden">
                {imgUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={product.title}
                    className="w-full h-full object-contain object-center"
                  />
                ))}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="text-blue-600 font-medium mt-2">
                  {product.price}.00 Birr
                </p>
                <button
                  onClick={() => handleDelete(product.productId)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;