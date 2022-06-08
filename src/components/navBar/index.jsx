import React from "react";
import logo from "../../images/logo.jpg"

import { StyledNavBar } from './style'

export default function NavBar(){
   return(
      <StyledNavBar>
         <img src={logo} alt="Consultoria Acadêmica" width="120px" height="105px"/>         
      </StyledNavBar>
   )
}