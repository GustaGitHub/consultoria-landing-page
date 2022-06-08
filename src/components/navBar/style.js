import styled, { keyframes } from "styled-components";

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

export const StyledNavBar = styled.nav`
   background-color: white;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   position: fixed;
   width: 100%;
   height: 108px;
   border-bottom: 1px solid gray;
   z-index: 1;
   img{
      animation: 1s ease-in-out ${animationOpacity};
   }
   @media (max-width: 450px){
      position: static;
   }
`