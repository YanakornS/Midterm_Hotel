import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelRecord from '../component/HotelRecord';

const Home = () => {
 

  return (
    <>
      <div className="pt-4 bg-[#F2F9FF]"> {/* Add padding-top and background color */}
        <HotelRecord />
        
      </div>
    </>
  );
}

export default Home;
