// import { useState } from 'react';

// function NewProduct() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [variations, setVariations] = useState([
//     { color: '', sizes: [], imgUrls: [], stock: 0 }
//   ]);

//   const sizes = ['XS', 'S', 'M', 'L', 'XL'];

//   const handleAddVariation = () => {
//     setVariations([...variations, { color: '', sizes: [], imgUrls: [], stock: 0 }]);
//   };

//   const handleVariationChange = (index, field, value) => {
//     const newVariations = [...variations];
//     newVariations[index][field] = value;
//     setVariations(newVariations);
//   };

//   const handleSizeChange = (index, size) => {
//     const newVariations = [...variations];
//     const sizeIndex = newVariations[index].sizes.indexOf(size);
//     if (sizeIndex > -1) {
//       newVariations[index].sizes.splice(sizeIndex, 1);
//     } else {
//       newVariations[index].sizes.push(size);
//     }
//     setVariations(newVariations);
//   };

//   const handleImageUpload = async (index) => {
//     // Implement the image upload logic using the UPLOADTHING_TOKEN
//     // For now, we'll just simulate an image URL being added
//     const newVariations = [...variations];
//     newVariations[index].imgUrls.push('https://example.com/image.jpg');
//     setVariations(newVariations);
//   };

//   const handleSubmit = async () => {
//     const productData = {
//       title,
//       description,
//       category,
//       price: parseFloat(price),
//       variations: variations.map(variation => ({
//         ...variation,
//         stock: parseInt(variation.stock, 10) // Convert stock to integer
//       }))
//     };
//     console.log(productData);
  
//     try {
//       const response = await fetch('http://localhost:8000/products/upload', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(productData)
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to upload product');
//       }
  
//       const result = await response.json();
//       alert(result.message);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-semibold">New Products</h1>
//         <button onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
//           Add Product
//         </button>
//       </div>

//       <div className="bg-white rounded-lg p-6 shadow-sm">
//         <div className="grid grid-cols-2 gap-8">
//           {/* Left Column - General Information */}
//           <div>
//             <h2 className="text-lg font-medium mb-4">General Information</h2>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-2">Name Product</label>
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   placeholder="Puffer Jacket With Pocket Detail"
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-600 mb-2">Description Product</label>
//                 <textarea
//                   rows="4"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
//                   placeholder="Cropped puffer jacket made of technical fabric. High neck and long sleeves..."
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-600 mb-2">Category</label>
//                 <input
//                   type="text"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   placeholder="Jacket"
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-2">Base Pricing</label>
//                   <input
//                     type="number"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     placeholder="47.55"
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Variations */}
//           <div>
//             <h2 className="text-lg font-medium mb-4">Variations</h2>
//             {variations.map((variation, index) => (
//               <div key={index} className="mb-6">
//                 <div className="mb-4">
//                   <label className="block text-sm text-gray-600 mb-2">Color</label>
//                   <input
//                     type="text"
//                     value={variation.color}
//                     onChange={(e) => handleVariationChange(index, 'color', e.target.value)}
//                     placeholder="Color"
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-sm text-gray-600 mb-2">Sizes</label>
//                   <div className="flex gap-2">
//                     {sizes.map((size) => (
//                       <button
//                         key={size}
//                         onClick={() => handleSizeChange(index, size)}
//                         className={`px-4 py-2 rounded-lg ${
//                           variation.sizes.includes(size)
//                             ? 'bg-green-100 text-green-600'
//                             : 'bg-gray-100 text-gray-600'
//                         }`}
//                       >
//                         {size}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-sm text-gray-600 mb-2">Stock</label>
//                   <input
//                     type="number"
//                     value={variation.stock}
//                     onChange={(e) => handleVariationChange(index, 'stock', e.target.value)}
//                     placeholder="Stock"
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-sm text-gray-600 mb-2">Images</label>
//                   <div className="flex gap-2">
//                     {variation.imgUrls.map((url, imgIndex) => (
//                       <div key={imgIndex} className="w-16 h-16 rounded-lg border border-gray-200">
//                         <img
//                           src={url}
//                           alt={`Variation ${index} Image ${imgIndex}`}
//                           className="w-full h-full object-cover rounded-lg"
//                         />
//                       </div>
//                     ))}
//                     <button
//                       onClick={() => handleImageUpload(index)}
//                       className="w-16 h-16 rounded-lg border border-gray-200 flex items-center justify-center bg-blue-50 text-blue-500"
//                     >
//                       <span className="text-2xl">+</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <button onClick={handleAddVariation} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
//               + Add Variation
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewProduct;
import { useState } from 'react';

function NewProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [variations, setVariations] = useState([
    { color: '', sizes: [], imgUrls: [''], stock: 0 }
  ]);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleAddVariation = () => {
    setVariations([...variations, { color: '', sizes: [], imgUrls: [''], stock: 0 }]);
  };

  const handleVariationChange = (index, field, value) => {
    const newVariations = [...variations];
    newVariations[index][field] = value;
    setVariations(newVariations);
  };

  const handleSizeChange = (index, size) => {
    const newVariations = [...variations];
    const sizeIndex = newVariations[index].sizes.indexOf(size);
    if (sizeIndex > -1) {
      newVariations[index].sizes.splice(sizeIndex, 1);
    } else {
      newVariations[index].sizes.push(size);
    }
    setVariations(newVariations);
  };

  const handleImageUrlChange = (variationIndex, imgIndex, value) => {
    const newVariations = [...variations];
    newVariations[variationIndex].imgUrls[imgIndex] = value;
    setVariations(newVariations);
  };

  const handleAddImageUrl = (variationIndex) => {
    const newVariations = [...variations];
    newVariations[variationIndex].imgUrls.push('');
    setVariations(newVariations);
  };

  const handleSubmit = async () => {
    const productData = {
      title,
      description,
      category,
      price: parseFloat(price),
      variations: variations.map(variation => ({
        ...variation,
        stock: parseInt(variation.stock, 10) // Convert stock to integer
      }))
    };
    console.log(productData);
  
    try {
      const response = await fetch('http://localhost:8000/products/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload product');
      }
  
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">New Products</h1>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Puffer Jacket With Pocket Detail"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Description Product</label>
                <textarea
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Cropped puffer jacket made of technical fabric. High neck and long sleeves..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Jacket"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Base Pricing</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="47.55"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Variations */}
          <div>
            <h2 className="text-lg font-medium mb-4">Variations</h2>
            {variations.map((variation, index) => (
              <div key={index} className="mb-6">
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">Color</label>
                  <input
                    type="text"
                    value={variation.color}
                    onChange={(e) => handleVariationChange(index, 'color', e.target.value)}
                    placeholder="Color"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">Sizes</label>
                  <div className="flex gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeChange(index, size)}
                        className={`px-4 py-2 rounded-lg ${
                          variation.sizes.includes(size)
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">Stock</label>
                  <input
                    type="number"
                    value={variation.stock}
                    onChange={(e) => handleVariationChange(index, 'stock', e.target.value)}
                    placeholder="Stock"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">Images</label>
                  <div className="space-y-2">
                    {variation.imgUrls.map((url, imgIndex) => (
                      <div key={imgIndex} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={url}
                          onChange={(e) => handleImageUrlChange(index, imgIndex, e.target.value)}
                          placeholder="Image URL"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => handleAddImageUrl(index)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      + Add Image
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={handleAddVariation} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              + Add Variation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;