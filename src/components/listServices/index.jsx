import React from 'react';

import { DivListServices } from './style'

export default function ListServices(){
   return(
      <DivListServices id='listServices'>
         <p id='title'>Serviços</p>
         <p id='subtitle'>Nossos serviços são feitos com alta qualidade acadêmica, veja alguns deles: </p>
         <ul>
            <li>Formatação</li>
            <li>Organização De slides</li>
            <li>Seleção de Artigos</li>
            <li>Revisão Ortográfica</li>
            <li>Orientação metodológica</li>
         </ul>
      </DivListServices>
   )
}