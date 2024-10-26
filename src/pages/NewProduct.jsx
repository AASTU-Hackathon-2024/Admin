import { useState } from 'react';

function NewProduct() {
  const [selectedSize, setSelectedSize] = useState('');
  const sizes = ['XS', 'S', 'M', 'XL', 'XXL'];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">New Products</h1>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - General Information */}
          <div>
            <h2 className="text-lg font-medium mb-4">General Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Name Product</label>
                <input
                  type="text"
                  placeholder="Puffer Jacket With Pocket Detail"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Description Product</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Cropped puffer jacket made of technical fabric. High neck and long sleeves..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Size</label>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg ${
                        selectedSize === size
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Base Pricing</label>
                  <input
                    type="number"
                    placeholder="47.55"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Stock</label>
                  <input
                    type="number"
                    placeholder="77"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Upload Image */}
          <div>
            <h2 className="text-lg font-medium mb-4">Upload Img</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="mb-4">
                <img
                  src="/jacket-preview.jpg"
                  alt="Preview"
                  className="w-64 h-64 mx-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex gap-2 justify-center">
                <div className="w-16 h-16 rounded-lg border border-gray-200">
                  <img
                    src="/jacket-thumb1.jpg"
                    alt="Thumbnail"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-16 h-16 rounded-lg border border-gray-200">
                  <img
                    src="/jacket-thumb2.jpg"
                    alt="Thumbnail"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-16 h-16 rounded-lg border border-gray-200 flex items-center justify-center bg-blue-50 text-blue-500">
                  <span className="text-2xl">+</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-gray-600 mb-2">Category</label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
                <option>Jacket</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            + Add variation
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;