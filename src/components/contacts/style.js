import styled from "styled-components";

export const DivContacts = styled.div`
   padding-left: 8px;
   font-family: 'Raleway','sans-serif';
   p#title{
      font-size: 20pt;
      font-weight: bolder;
      color: rgb(207,181, 59);
   }
   div#flexContacts{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      a{
         text-decoration: none;
         color: black;
      }
   }
   div.socialMedia{
      padding: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span{
         padding: 10px;
      }
      :hover{
         span{
            background-color: black;
            padding: 10px;
            border-radius: 10px;
            color: darkgoldenrod;
         }
      }
      @media (max-width: 450px){
         img{
            width: 87px;
            height: 87px;
         }
      }
   }
`