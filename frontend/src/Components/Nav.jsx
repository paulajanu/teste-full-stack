import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome, FaPenAlt } from "react-icons/fa";
import '../styles/components/nav.scss';

const Nav = () => {
    const [activePage, setActivePage] = useState('/');
    return (
        <nav className="menu-container">
            <ul className="list-menu">
                <li>
                    <NavLink
                        to="/"
                        activeClassName="active" 
                        className="links menu-items"
                        onClick={() => setActivePage('/')} 
                    >
                        <FaHome className="icon-item"/>
                        <span>Início</span>
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to="/sobre"
                        activeClassName="active" 
                        className="links menu-items"
                        onClick={() => setActivePage('sobre')} 
                    >
                        <FaRegIdCard className="icon-item"/>
                        <span>Sobre</span>
                    </NavLink>
                </li> */}
                {/* <li>
                    <NavLink
                        to="/contato"
                        activeClassName="active" 
                        className="links menu-items"
                        onClick={() => setActivePage('contato')} 
                    >
                         <FaEnvelope className="icon-item"/>
                        <span>Contato</span>
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to="/write"
                        activeClassName="active" 
                        className="links menu-items"
                        onClick={() => setActivePage('write')} 
                    >
                        <FaPenAlt className="icon-item"/>
                        <span>Publicar</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;