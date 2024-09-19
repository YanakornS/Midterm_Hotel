import React, { useEffect } from 'react';

const PageNews = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".carousel a");
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // ป้องกันการทำงานเริ่มต้น
        const targetSlide = link.getAttribute("href"); // ดึงข้อมูลสไลด์ที่ต้องการเปลี่ยนไป
        document.querySelector(targetSlide).scrollIntoView({
          behavior: 'smooth',
          block: 'center', // เลือกตำแหน่งที่หน้าจอจะเลื่อนไป (center คือให้อยู่ตรงกลาง)
        });
      });
    });
  }, []);

  return (
    <div className="bg-[#F2F9FF]">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://pix10.agoda.net/hotelImages/42496500/-1/17b4376744e12952a683706efe36ef6e.jpg?ce=0"
            className="w-full h-[300px] object-cover "
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/86/7a/exterior-9.jpg?w=1200&h=-1&s=1"
            className="w-full h-[300px] "
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.chillpainai.com/src/wewakeup/scoop/images/3ebef240817783785f76e397a9faa07d22386685.jpg"
            className="w-full h-[300px] "
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.trvl-media.com/lodging/14000000/13340000/13336400/13336337/4070cddb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
            className="w-full h-[300px] object-cover"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default PageNews;
