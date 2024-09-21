import React from 'react';

const PagesNews = () => {
  return (
    <div>
      {/* โปรโมชั่น */}
      <div className="p-4 bg-[#F2F9FF] rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Special Offers</h2>
        <div className="flex flex-wrap -m-2">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/337393984.jpg?k=cffce01d46e2ef9340cac793a3e2f806f6544e4623deaeb39874a60f776da9e7&o=&hp=1"
                alt="Special Offer 1"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Discounted Beachfront Suite</h3>
              <p className="text-gray-600 flex-grow">Get 20% off on our Beachfront Suite. Limited time offer!</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full">
              <img
                src="https://media.gettyimages.com/id/2152626974/video/italian-breakfast-with-sea-view.jpg?s=640x640&k=20&c=arExGBGlAueFolOcw9kW3oqxgWx7Its4DwfuNGLnBdE="
                alt="Special Offer 2"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Free Breakfast with Ocean View</h3>
              <p className="text-gray-600 flex-grow">Book an Ocean View Room and enjoy complimentary breakfast for two!</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full">
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/pulse_localcampaign_urbanescape_th/home_banner_web/th-th.png"
                alt="Special Offer 3"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Weekend Getaway Package</h3>
              <p className="text-gray-600 flex-grow">Enjoy a weekend getaway with special rates and perks. Book now!</p>
            </div>
          </div>
        </div>
      </div>

      {/* โปรโมชั่นสำหรับเที่ยวบินและกิจกรรมท่องเที่ยว */}
      <div className="p-4 bg-[#F2F9FF]rounded-lg shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-4">Promotions for Travel Activities</h2>
        <div className="flex flex-wrap -m-2">
          {/* โปรโมชั่นสำหรับเที่ยวบิน */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full">
              <img
                src="https://cdn6.agoda.net/images/blt2/wcActivtiesEG-NV-20240514/Web/th-th.png" // เปลี่ยน URL ตามความเหมาะสม
                alt="Flight Offer"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Discounted Flight Tickets</h3>
              <p className="text-gray-600 flex-grow">Get up to 30% off on select international flights. Limited seats available!</p>
            </div>
          </div>

          {/* โปรโมชั่นสำหรับกิจกรรมท่องเที่ยว */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full">
              <img
                src="https://7304094.fs1.hubspotusercontent-na1.net/hubfs/7304094/flight_ops/marketing%20campaigns/Eva%20Air/discovertheworld2/mspa/en-us.png"
                alt="Activity Offer"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Exclusive Tour Activities</h3>
              <p className="text-gray-600 flex-grow">Book your tour activities now and get 15% off on all bookings.</p>
            </div>
          </div>
          
          {/* โปรโมชั่นเพิ่มเติม */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOBHxYhduYkYWvHIbpwOll0Nf8TaBn0gwuw&s" // เปลี่ยน URL ตามความเหมาะสม
                alt="Bundle Offer"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Hotel + Flight Bundle</h3>
              <p className="text-gray-600 flex-grow">Save 25% when you book a hotel and flight together. Limited time offer!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesNews;
