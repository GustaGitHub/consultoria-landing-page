import React from "react";
import { DepositionsDiv } from './style';            

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

//images
import img1 from '../../images/thanks/agradecimento1.jpeg'
import img2 from '../../images/thanks/agradecimento2.jpg'
import img3 from '../../images/thanks/agradecimento3.jpeg'
import img4 from '../../images/thanks/agradecimento4.jpeg'
import img5 from '../../images/thanks/agradecimento5.jpeg'   

export default function Depositions(){

   return(
      <DepositionsDiv>
         <p id="title">Depoimentos</p>
         <p id="subtitle">Veja a seguir, os depoimentos de quem contratou os nossos serviços :</p>
         
         <div id="carousel">
            <Carousel touch={true} interval={2000}>
                  <Carousel.Item>
                     <img className="d-block w-100" src={img1} alt="First slide" height='300px'/>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img className="d-block w-100" src={img2} alt="Second slide" height='300px'/>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img className="d-block w-100" src={img3} alt="Third slide" height='300px'/>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img className="d-block w-100" src={img4} alt="Third slide" height='300px'/>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img className="d-block w-100" src={img5} alt="Third slide" height='300px'/>
                  </Carousel.Item>
            </Carousel>
         </div>

      </DepositionsDiv>
   )
}