import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome, FaPenSquare } from "react-icons/fa";
import Logo from '../img/logo-voe-descobertas.png';
import '../styles/components/header.scss';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo Voe Descobertas"/>
            <nav className="menu-container">
                <ul className="list-menu">
                    <li>
                        <NavLink
                            to="/"
                            activeClassName="active" 
                            className="links menu-items"
                        >
                            <FaHome className="icon-item"/>
                            <span>Início</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/write"
                            activeClassName="active" 
                            className="links menu-items"
                        >
                            <FaPenSquare className="icon-item"/>
                            <span>Publicar</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;