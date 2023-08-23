import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import '../styles/components/footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <span>Voe Descobertas</span>
            <ul className="list-menu-footer">
                <li>
                    <FaInstagram className='icon-footer'/>
                </li>
                <li>
                    <FaTwitter className='icon-footer'/>
                </li>
                <li>
                    <FaYoutube className='icon-footer'/>
                </li>
            </ul>
        </div>
    )
}

export default Footer;