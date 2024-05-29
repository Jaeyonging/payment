import React from 'react'
import Slider from 'react-slick';
import '../styles/slick-theme.css'
import '../styles/slick.css'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,

  };

  const onclick = () => {
    console.log("click")
    navigate("/main")
  }

  return (
    <div>
      < div>
        <Slider {...settings} className='absolute w-[100vw] h-[100vh]'>
          <img src="https://cdn.bonif.co.kr/cmdt/20220628_qRJ_1656371947942_631Kb.jpg" className='w-[100vw] h-[100vh]' onClick={onclick} />
          <img src="https://cdn.bonif.co.kr/cmdt/20220628_qRJ_1656371947942_631Kb.jpg" className='w-[100vw] h-[100vh]' onClick={onclick} />
        </Slider>
      </div >
    </div >
  )
}
