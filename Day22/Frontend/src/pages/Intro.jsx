import React from 'react';
import Layout from '../components/Layout';
import background from './one.jpg';
import Footer from '../components/Footer';
import { useState } from 'react';
import './Carousel.css';

// Import your three images
import image1 from '../components/1.png';
import image2 from '../components/2.png';
import image3 from '../components/3.png';

const Intro = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    goToPage(currentPage - 1);
  };

  return (
    <>
      <Layout />
      <div className="main-wrapper">
        <div className="carousel">
          <div className="carousel-content">
            <div className={`page page-${currentPage}`}>
              <img
                src={currentPage === 1 ? image1 : currentPage === 2 ? image2 : image3}
                alt={`Image ${currentPage}`}
              />
            </div>
          </div>
          <div className="carousel-buttons-left">
            <button onClick={goToPrevPage} disabled={currentPage === 1}>
              Previous
            </button>
          </div>
          <div className="carousel-buttons-right">
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Intro;
