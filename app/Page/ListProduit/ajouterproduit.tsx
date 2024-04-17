// AddProductForm.tsx
import React, { useState } from 'react';

const AddProductForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response =await fetch ('/api/addproduit');
      // Optionally, you can handle success or redirect to another page
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
