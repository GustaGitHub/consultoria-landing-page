import React, { useEffect, useState } from 'react'

//styled-components
import { DivContacts } from './style'

//icons
import instagram from '../../icons/insta.png'
import whatsapp from '../../icons/whatsApp.png'
import gmail from '../../icons/gmail.png'

//Helpers
import hourSubject from '../../helpers/hourSubject';

export default function Contacts(){

   const [hours, setHours] = useState("")
   
   useEffect(()=>{
      hourSubject(setHours)
   }, [hours])
   
   return(
      <DivContacts id='contacts'>
          <p id="title">Contatos</p>
          <p>Entre em contato conosco através destes meios :</p>
          <div id='flexContacts'>
             <div>
                <a href="#">
                  <div className='socialMedia'>
                     <img src={whatsapp} alt="WhatsApp"/>
                     <span>Whatsapp</span>
                  </div>
                </a>
             </div>
             <div>
                <a href="#">
                  <div className="socialMedia">
                     <img src={instagram} alt="Instagram"/>
                     <span>Instagram</span>
                  </div>
                </a>
             </div>
             <div>
                <a href="#">
                  <div className="socialMedia">
                     <img src={gmail} alt="Gmail"/>
                     <span>Gmail</span>
                  </div>
                </a>
             </div>
          </div>
      </DivContacts>
   )
}
