// src/components/ItemList.js
import React from 'react';
import Item from './Item';

const ItemList = ({ items, onDelete }) => {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ItemList;