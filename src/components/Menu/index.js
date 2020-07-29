import React from 'react'
import Logo from '../../assets/img/logo.svg'
import Button from '../Button'
import {Link} from 'react-router-dom'

import './Menu.css'

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/" >
                <img className="Logo" src={Logo} alt="Luscaflix Logo"/>
            </Link>

            <Button className="btn" as={Link} to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    ) 
}

export default Menu