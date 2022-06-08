import styled from 'styled-components'

export const DepositionsDiv = styled.div`
   //background-color: cyan;
   font-family: 'Raleway', 'sans-serif';
   padding-left: 8px;
   p#title{
      font-size: 20pt;
      font-weight: bolder;
      color: rgb(207,181, 59);
   }
   p#subtitle{
      font-size: 13pt;
   }
   div#carousel{
      z-index: 5;
      padding: 0px 170px 0px 170px;
      img{
         border-radius: 10px;
      }
      @media (max-width: 770px){
         padding: 0;
         img{
            height: 145px;
         }
      }
   }
` 