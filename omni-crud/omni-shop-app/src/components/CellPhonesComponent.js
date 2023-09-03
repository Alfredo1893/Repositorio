import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CellPhonesComponent() {
  const [cellPhones, setCellPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make the GET request when the component mounts
    axios.get('https://denny2023.azurewebsites.net/api/celulares', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      setCellPhones(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Cell Phones:</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {cellPhones.map(cellPhone => (
            <li key={cellPhone.id}>{cellPhone.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CellPhonesComponent;