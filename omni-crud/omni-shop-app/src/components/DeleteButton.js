// src/components/DeleteConfirmation.js
import React from 'react';
import axios from 'axios';

const DeleteConfirmation = ({ item, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://denny2023.azurewebsites.net/api/items/${item.id}`);
      console.log('Item deleted:', item.id);

      // Call the onDelete callback to update the list
      onDelete(item.id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <p>Are you sure you want to delete the item "{item.name}"?</p>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteConfirmation;
