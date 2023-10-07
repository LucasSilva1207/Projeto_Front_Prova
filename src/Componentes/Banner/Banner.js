import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
      <div className="banner-container">
      <h1>Você pode se apaixonar agora por um pet!</h1>
        <Slider {...settings}>
          <div>
            <img src="/imagens/banner.png" alt="Imagem 1" />
          </div>
          <div>
            <img src="/imagens/banner1.png" alt="Imagem 2" />
          </div>
          <div>
            <img src="/imagens/banner2.png" alt="Imagem 3" />
          </div>
        </Slider>
        <h1>Adote já o seu:</h1>
      </div>
  );
};

export default Banner;
