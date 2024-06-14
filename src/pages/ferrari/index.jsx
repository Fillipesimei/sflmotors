import React from 'react';
import './ferrari.css';
import Slider from "react-slick";
import img from '../../componets/carros/ferrari458/458frente.jpg'
import img1 from '../../componets/carros/ferrari458/458lado.jpg'
import img2 from '../../componets/carros/ferrari458/naestrada.jpg'
import img4 from '../../componets/carros/ferrari458/scudeto.jpg'
import { Button } from '@mui/material';
function Ferrari() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

};

  return (
    <>
    <div className='slider'>

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
    <div className="container-ferrari">
      <div className="form">
        <h2>FERRARI 458 ITALIA</h2>
        <p>4.5 V8 GASOLINA F1-DCT</p>
        <div className="details">
          <div className="detail">
            <strong>Cidade:</strong> Curitiba - PR
          </div>
          <div className="detail">
            <strong>Ano:</strong> 2012/2013
          </div>
          <div className="detail">
            <strong>KM:</strong> 25.320
          </div>
          <div className="detail">
            <strong>Câmbio:</strong> Automática
          </div>
          <div className="detail">
            <strong>Carroceria:</strong> Cupê
          </div>
          <div className="detail">
            <strong>Combustível:</strong> Gasolina
          </div>
          <div className="detail">
            <strong>Final de placa:</strong> 8
          </div>
          <div className="detail">
            <strong>Cor:</strong> Vermelho
          </div>
          <div className="detail">
            <strong>Aceita troca:</strong> Sim
          </div>
          <div className="detail">
            <strong>Todas as revisões feitas pela concessionária:</strong> Sim
          </div>
        </div>

        <h3>Itens de veículo</h3>
        <ul className="vehicle-items">
          <li>Airbag</li>
          <li>Alarme</li>
          <li>Ar quente</li>
          <li>Banco com regulagem de altura</li>
          <li>CD Player</li>
          <li>Computador de bordo</li>
          <li>Controle de tração</li>
          <li>Desembaçador traseiro</li>
          <li>Ar condicionado</li>
          <li>Freio ABS</li>
          <li>Rádio</li>
          <li>Retrovisores elétricos</li>
          <li>Rodas de liga leve</li>
          <li>Sensor de chuva</li>
          <li>Sensor de estacionamento</li>
          <li>Retrovisor fotocrômico</li>
          <li>Rádio e toca fitas</li>
          <li>Travas elétricas</li>
          <li>Vidros elétricos</li>
          <li>Volante com regulagem de altura</li>
          <li>Bancos em couro</li>
          <li>Farol de xenônio</li>
          <li>Direção hidráulica</li>
          <li>CD e MP3 Player</li>
          <Button ></Button>
        </ul>
        <h3>Sobre o vendedor</h3>
        <div style={{Width:'300px', height:'200px', border:'1px solid #CCC', display:'flex', flexDirection:'collumn',justifyContent:'center', gap:'10px', padding:'10px'}}> 

        <ul className="vehicle-items" style={{margin:'10px'}} >
          <li>Entre em contado com o vendedor </li>
         <h1 style={{textAlign:'center'}}> Stop Car</h1>
          <Button style={{ backgroundColor:'red', height:'46px', color:'white', }}  >Ver Telefone</Button>
        </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Ferrari;
