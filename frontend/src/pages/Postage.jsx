import React from 'react';
import '../styles/components/postage.scss';
import ImgPost from '../img/img-post.png';
import { FaPenFancy, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Postage = () => {
    return (
        <div className="postage">
            <div className="content">
                <img src={ImgPost} alt="Imagem da postagem"/>
                <div className='top'>
                    <div className='info'>
                        <span>Ana Paula</span>
                        <p>17 de agosto às 15:30:00</p>
                    </div>
                    <div className='options'>
                        <Link to={`/write?edit=2`}>
                            <FaPenFancy className='icon-options'/>
                        </Link>
                        <FaTrash className='icon-options'/>
                    </div>
                </div>
                <div className='post-content'>
                    <h1>Explorando as Belezas de Pipa, Rio Grande do Norte!</h1>
                    <p>Se você está em busca de uma praia paradisíaca no Rio Grande do Norte, Pipa é um destino que não pode faltar na sua lista! Com suas praias deslumbrantes, falésias imponentes e uma atmosfera descontraída, Pipa oferece uma experiência única para os amantes da natureza e dos momentos relaxantes à beira-mar.
                    <br/>
                    <br/>
                    🌅 Praias de Encantar: Pipa é famosa por suas praias de tirar o fôlego. A Praia do Amor é uma das mais icônicas, conhecida por suas ondas perfeitas para o surfe e pela formação rochosa em formato de coração. A Praia de Pipa em si é ótima para relaxar e dar um mergulho, enquanto a Praia do Madeiro é um local ideal para avistar golfinhos e aproveitar as águas cristalinas.
                    <br/>
                    <br/>
                    🏞️ Falésias Deslumbrantes: As falésias coloridas que cercam Pipa são um espetáculo à parte. Você pode explorar trilhas que levam até os mirantes, de onde poderá contemplar vistas panorâmicas deslumbrantes das praias, do mar e das formações rochosas.
                    <br/>
                    <br/>
                    🛍️ Rua Principal Vibrante: A Rua Baía dos Golfinhos é o coração de Pipa, repleta de lojas de artesanato, restaurantes, bares e cafés. Passear por essa rua é uma maneira maravilhosa de absorver a atmosfera descontraída da vila, enquanto encontra lembranças únicas para levar para casa.
                    <br/>
                    <br/>
                    🍴 Culinária Local: Pipa também é um ótimo destino gastronômico. Experimente pratos típicos da região, como frutos do mar frescos e especialidades nordestinas. Muitos restaurantes têm vistas panorâmicas para o mar, permitindo que você desfrute de uma refeição deliciosa enquanto aprecia a paisagem.
                    <br/>
                    <br/>
                    Pipa, no Rio Grande do Norte, é verdadeiramente um paraíso tropical que combina praias deslumbrantes, atividades emocionantes e uma vibe relaxante. Se você está procurando um lugar onde a natureza reina e a beleza está em cada canto, Pipa é o destino perfeito para você.</p>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default Postage;