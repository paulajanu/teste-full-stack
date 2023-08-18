import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaRegIdCard, FaEnvelope, FaPenAlt } from "react-icons/fa";
import '../styles/components/nav.scss';

const Nav = () => {
    return (
        <nav className="menu-container">
            <ul className="list-menu">
                <li>
                    <Link to="/" className="links menu-items">
                        <FaHome className="icon-item"/>
                        <span>Início</span>
                    </Link> 
                </li>
                <li>
                    <Link to="#" className="links menu-items">
                        <FaRegIdCard className="icon-item"/>
                        <span>Sobre</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="links menu-items">
                        <FaEnvelope className="icon-item"/>
                        <span>Contato</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="links menu-items">
                        <FaPenAlt className="icon-item"/>
                        <span>Publicar</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;