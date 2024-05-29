import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

function Gallery() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://freetestapi.com/api/v1/dogs?limit=5'); 
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []); 

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="gallery">
      <h1>Dogs Gallery</h1>
      <div className="gallery-items">
        {data.map(dog => (
          <div key={dog.id} className="gallery-item">
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

