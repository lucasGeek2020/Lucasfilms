import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.svg'

function Footer() {
  return (
    <FooterBase>
      
        <img src={Logo} alt="Logo Luscafilms" />
      
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
