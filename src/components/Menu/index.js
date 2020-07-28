import React from 'react'
import Logo from '../../assets/img/logo.svg'
import Button from '../Button'

import './Menu.css'

function Menu(){
    return (
        <nav className="Menu">
            <a href ="/" >
                <img className="Logo" src={Logo} alt="Luscaflix Logo"/>
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    ) 
}

export default Menu