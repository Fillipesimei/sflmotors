import React from 'react';
import Carros from '../../componets/carros';
import NavBar from '../../componets/navbar';
import './home.css';
import ferrari1 from '../../componets/carros/ferrari458/458frente.jpg';
import ferrari2 from '../../componets/carros/ferrari458/458lado.jpg';
import ferrari4 from '../../componets/carros/ferrari458/naestrada.jpg';
import ferrari5 from '../../componets/carros/ferrari458/scudeto.jpg';
import audi1 from '../../componets/carros/audir8/r8rua.jpg'
import audi2 from '../../componets/carros/audir8/r8lado.jpg'
import audi3 from '../../componets/carros/audir8/r8frente.jpg'
import audio4 from '../../componets/carros/audir8/audifundo.jpg'
import corvete from '../../componets/carros/corvette/c7lado.jpg'
import corvete1 from '../../componets/carros/corvette/c7trás.jpg'
import corvete2 from '../../componets/carros/corvette/c7grama.jpg'
import corvete3 from '../../componets/carros/corvette/c7fundo.jpg'
import lambo1 from '../../componets/carros/lambosvj/frente.jpg'
import lambo2 from '../../componets/carros/lambosvj/lado.jpg'
import lambo3  from '../../componets/carros/lambosvj/svjrualado.jpg'
import lambo4  from '../../componets/carros/lambosvj/aventadorfrente.jpg'
import aston  from '../../componets/carros/astonmartin/astonlado.jpg'
import aston1  from '../../componets/carros/astonmartin/astonpista.jpg'
import aston2  from '../../componets/carros/astonmartin/astonback.jpg'
import aston3  from '../../componets/carros/astonmartin/astongrama.jpg'
import { TextField, Button } from '@mui/material';

function Home() {
  return (
    <>
      <NavBar />
      <div className='principal'>
        <div className="container">
          <div className='pesquisa'>
            <form>
              <TextField label="Digite marca ou modelo do carro" variant="outlined" style={{ width:'70%'}}  />
              <Button  type='submit' style={{height:'56px', width:'200px', backgroundColor:'#1673A8', marginLeft:'10px', color:'white'}}>Ver Ofertas</Button>
            </form>
          </div>
        </div>
        <div className='lojas-oficiais'>
          <h3>Modelos Em  Destaque</h3>
        </div>
        <div className='imagens'>
          <Carros title={'FERRARI 458'} descripition={'4.5 V8 GASOLINA F1-DCT'} ano={'2014/2015'} price={'R$2.400.000'} km={'18.297km'} img={ferrari1} img1={ferrari4} img2={ferrari2}  img4={ferrari5} />
          <Carros title={'AUDI R8'} descripition={'5.2 fsi QUATTRO V10'} ano={'2013/2014'} price={'R$1.390.000'} km={'29.470km'} img={audi1} img1={audi2} img2={audi3} img4={audio4}  />
          <Carros title={'CORVETTE C7'} descripition={'6.2 V8 LT3'} ano={'2017/2018'} price={'R$780.000'} km={'6.450km'} img={corvete} img1={corvete1} img2={corvete2}  img4={corvete3} />
          <Carros title={'AVENTADOR SVJ'} descripition={'6.5 V122 LP 770-4'} ano={'2020/2020'} price={'R$12.000.000'} km={'2.345km'} img={lambo1} img1={lambo2} img2={lambo3}  img4={lambo4} />
          <Carros title={'ASTON MARTIN'} descripition={'5.2 V12 TURBO'} ano={'2022/2022'} price={'R$3.990.000'} km={'1.790km'} img={aston} img1={aston1} img2={aston2}  img4={aston3} />
        </div>
      </div>
    </>
  );
}

export default Home;
