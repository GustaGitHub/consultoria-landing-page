import React from 'react';

//Styled-Components
import { DivParallax, Phrases, FlexFirstPart } from './style'

export default function FirstPart(){
   
   const redirectContacts = () =>{
      window.location.href = "#contacts"
   }
   
   return(
      <FlexFirstPart>
        <DivParallax/>
        <Phrases>
              <p id="title">
                 <i>
                  Precisando de ajuda com seus <span>Trabalhos Acadêmicos</span> ou com <span>TCC</span> ?
                 </i>
               </p>
              <br/>
              <p><i><span id='contactsLink' onClick={redirectContacts}>Entre em contato conosco por aqui</span></i></p>
         </Phrases>
      </FlexFirstPart>
   )
}