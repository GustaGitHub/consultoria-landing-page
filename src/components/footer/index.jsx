import React from "react";
import {DivFooter} from './style'

export default function Footer(){
    return(
        <DivFooter>
           <p> Feito por &copy;Gustavo Ribeiro</p>
           <div>
               <a href="malito:gustavo.ribeiro.duarte2003@gmail.com">E-Mail</a>
               <span> | </span>
               <a href="https://www.linkedin.com/in/gustavo2003/" target="_blank">LinkedIn</a>
               <span> | </span>
               <a href="https://github.com/GustaGitHub" target="_blank">GitHub</a>
           </div>
        </DivFooter>
    )
}