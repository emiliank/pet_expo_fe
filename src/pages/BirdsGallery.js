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
        let url = 'https://freetestapi.com/api/v1/birds';
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
      <h1>Birds Gallery</h1>
      <SearchBar onSearch={setSearchTerm} />
      <div className="gallery-items">
        {currentItems.map(bird => (
          <div key={bird.id} className="gallery-item" onClick={() => showPetDetails(bird)}>
            <img src={bird.image} alt={bird.name} />
            <div className="overlay">
              <h2 className="pettype">{bird.name}</h2>
              <p className="origin"><strong>Place of Found:</strong> {bird.place_of_found}</p>
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
            <p><strong>Place of Found:</strong> {selectedPet.place_of_found}</p>
            <p><strong>Species:</strong> {selectedPet.species}</p>
            <p><strong>Family:</strong> {selectedPet.family}</p>
            <p><strong>Wingspan(cm):</strong> {selectedPet.wingspan_cm}</p>
            <p><strong>Weight(kg):</strong> {selectedPet.weight_kg}</p>
            <p><strong>Diet:</strong> {selectedPet.diet}</p>
            <p><strong>Habitat:</strong> {selectedPet.habitat}</p>
            <p><strong>Description:</strong> {selectedPet.description}</p>
            <img src={selectedPet.image} alt={selectedPet.name} width="300px" />
          </div>
        </div>
      )}
    </div>
  );
}

export default MyComponent;

