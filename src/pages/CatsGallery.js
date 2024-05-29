import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import './Gallery.css';

function MyComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPet, setSelectedPet] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://freetestapi.com/api/v1/cats';
        if (searchTerm) {
          url += `?search=${encodeURIComponent(searchTerm)}`;
        }
        const response = await axios.get(url);
        const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setData(sortedData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [searchTerm]);

  const showPetDetails = (pet) => {
    setSelectedPet(pet);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedPet(null);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="gallery">
      <h1>Cats Gallery</h1>
      <SearchBar onSearch={setSearchTerm} />
      <div className="gallery-items">
        {currentItems.map(cat => (
          <div key={cat.id} className="gallery-item" onClick={() => showPetDetails(cat)}>
            <img src={cat.image} alt={cat.name} />
            <div className="overlay">
              <h2 className="pettype">{cat.name}</h2>
              <p className="origin"><strong>Origin:</strong> {cat.origin}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
          <button
            key={page}
            className={`page-button ${page === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      {isPopupVisible && selectedPet && (
        <div className="popup">
          <div className="popup-content" style={{ width: "80%", maxWidth: "800px" }}>
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>{selectedPet.name}</h2>
            <p><strong>Origin:</strong> {selectedPet.origin}</p>
            <p><strong>Temperament:</strong> {selectedPet.temperament}</p>
            <p><strong>Colors:</strong> {selectedPet.colors.join(', ')}</p>
            <p><strong>Description:</strong> {selectedPet.description}</p>
            <img src={selectedPet.image} alt={selectedPet.name} width="300px" />
          </div>
        </div>
      )}
    </div>
  );
}

export default MyComponent;

