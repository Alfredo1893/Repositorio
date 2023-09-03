// src/components/ReadItems.js
import React from 'react';
import ItemList from './ItemList';

const ReadItems = ({ items, onDelete }) => {
  return (
    <div>
      <h2>Items List</h2>
      <ItemList items={items} onDelete={onDelete} />
    </div>
  );
};

export default ReadItems;
