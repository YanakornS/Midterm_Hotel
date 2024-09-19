import React from 'react';

const PagesNews = () => {
  return (
    <div>
      

      {/* โปรโมชั่น */}
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Special Offers</h2>
        <div className="flex flex-wrap -m-2">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/337393984.jpg?k=cffce01d46e2ef9340cac793a3e2f806f6544e4623deaeb39874a60f776da9e7&o=&hp=1"
                alt="Special Offer 1"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Discounted Beachfront Suite</h3>
              <p className="text-gray-600">Get 20% off on our Beachfront Suite. Limited time offer!</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://media.gettyimages.com/id/2152626974/video/italian-breakfast-with-sea-view.jpg?s=640x640&k=20&c=arExGBGlAueFolOcw9kW3oqxgWx7Its4DwfuNGLnBdE="
                alt="Special Offer 2"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Free Breakfast with Ocean View</h3>
              <p className="text-gray-600">Book an Ocean View Room and enjoy complimentary breakfast for two!</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/pulse_localcampaign_urbanescape_th/home_banner_web/th-th.png"
                alt="Special Offer 3"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Weekend Getaway Package</h3>
              <p className="text-gray-600">Enjoy a weekend getaway with special rates and perks. Book now!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesNews;
