// src/components/Item.js
import React from 'react';

const Item = ({ item, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Item;
