import React from 'react'
import Logo from '../img/logo-voe-descobertas.png';
import '../styles/components/header.scss';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo Voe Descobertas"/>
        </div>
    )
}

export default Header;