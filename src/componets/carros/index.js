import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carros.css"
import { useNavigate } from "react-router-dom";

const Carros = ({title, ano,img, img1, img2, img3, img4,descripition, km, price} ) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    const navigate = useNavigate()
    const handlePage= ()=>{
        return navigate('/ferrari')
    }
    return (
        <div className="carros" onClick={handlePage}>

           <div className = "container-slide">
            <Slider {...settings}>
                <div>
                    <img src={img} alt="ferrari458" />
                </div>
                <div>
                    <img src={img1} alt="ferrari458" />
                </div>
                <div>
                    <img src={img2} alt="ferrari458" />
                </div>
                
                <div>
                    <img src={img4} alt="ferrari458" />
                </div>
            </Slider>
            </div> 

           
          
            <div className="infos">
                <h3>{title}</h3>
                <p>{descripition}</p>
            </div>

            <div className="infos2">
                <div className="preco">
                <h2>{price}</h2>
                </div>

                <div className="paragrafos">
                    <p>{ano}</p>
                    <p>{km}</p>
                </div>
                
            </div>
            
      
           

        </div>

    );
};

export default Carros;

