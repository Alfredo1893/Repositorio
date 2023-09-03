// src/components/CreateForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleCreate = async () => {
    try {
      const response = await axios.post('https://denny2023.azurewebsites.net/api/celulares', {
        name: itemName,
        description: itemDescription,
      });

      console.log('Item created:', response.data);

      // Clear input fields after successful create
      setItemName('');
      setItemDescription('');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div>
      <h2>Create New Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item Description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateForm;
