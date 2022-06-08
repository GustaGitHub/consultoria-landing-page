import styled, { keyframes } from 'styled-components'

//Images
import parallax from '../../images/img-parallax.jpg'

const animationOpacity = keyframes`
   0%{
      opacity: 0;
   }
   50%{
      opacity: 0.5;
   }
   100%{
      opacity: 1;
   }
`
export const FlexFirstPart = styled.div`
   display: flex;
   flex-direction: row;
   border-bottom: 1px solid black;
   padding-top: 75px;

   @media (max-width: 450px){
      padding-top: 5%;
      padding-left: 5%;
   }
`

export const Phrases = styled.div`
   width: 50%;
   padding: 20px 8px;
   margin-left: 2%;
   animation: 890ms ease-in-out ${animationOpacity};
   font-family: 'Raleway', 'sans-serif';
   
   p#title{
      font-size: 30pt;
   }
   p{
      margin-top: 10%;
      font-size: 25pt;
   }
   span{
      color: rgb(207,181, 59);
   }
   #contactsLink{
      cursor: pointer;
      :hover{
         color: rgb(153,101, 21);
      }
   }
   a{
      margin-top: 16%;
      color: rgb(207,181, 59);
      font-size: 25pt;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   
   @media (max-width: 820px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 5%;
      p#title{
         font-size: 28pt;
      }
      a{
         margin-top: 15%;
         padding-left: 45%;
      }
   }
`

export const DivParallax = styled.div`
   background: url(${parallax});
   background-size: 750px;
   background-position: center left;
   background-repeat: no-repeat;
   background-attachment: fixed;
   width: 60%;
   
   @media (max-width: 820px){
      display: none;
   }
`