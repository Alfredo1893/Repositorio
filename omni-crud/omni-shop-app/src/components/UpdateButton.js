// src/components/UpdateForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateForm = () => {
  const [itemId, setItemId] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `https://denny2023.azurewebsites.net/api/items/${itemId}`,
        {
          name: newItemName,
          description: newItemDescription,
        }
      );

      console.log('Item updated:', response.data);

      // Clear input fields after successful update
      setItemId('');
      setNewItemName('');
      setNewItemDescription('');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div>
      <h2>Update Item</h2>
      <input
        type="text"
        placeholder="Item ID"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Item Name"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Item Description"
        value={newItemDescription}
        onChange={(e) => setNewItemDescription(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default UpdateForm;
