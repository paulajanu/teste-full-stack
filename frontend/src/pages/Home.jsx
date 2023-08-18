import React from 'react';
import Image from '../img/img-post.png';
import { Link } from 'react-router-dom';
import '../styles/components/home.scss';

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Explorando as Belezas de Pipa, Rio Grande do Norte!",
            desc: "Se você está em busca de uma praia paradisíaca no Rio Grande do Norte, Pipa é um destino que não pode faltar na sua lista! Com suas praias deslumbrantes, falésias imponentes e uma atmosfera descontraída, Pipa oferece uma experiência única para os amantes da natureza e dos momentos relaxantes à beira-mar.",
            img: Image,
        },
        {
            id: 2,
            title: "Explorando as Belezas de Pipa, Rio Grande do Norte!",
            desc: "Se você está em busca de uma praia paradisíaca no Rio Grande do Norte, Pipa é um destino que não pode faltar na sua lista! Com suas praias deslumbrantes, falésias imponentes e uma atmosfera descontraída, Pipa oferece uma experiência única para os amantes da natureza e dos momentos relaxantes à beira-mar.",
            img: Image,
        },
        {
            id: 3,
            title: "Explorando as Belezas de Pipa, Rio Grande do Norte!",
            desc: "Se você está em busca de uma praia paradisíaca no Rio Grande do Norte, Pipa é um destino que não pode faltar na sua lista! Com suas praias deslumbrantes, falésias imponentes e uma atmosfera descontraída, Pipa oferece uma experiência única para os amantes da natureza e dos momentos relaxantes à beira-mar.",
            img: Image,
        },
        {
            id: 4,
            title: "Explorando as Belezas de Pipa, Rio Grande do Norte!",
            desc: "Se você está em busca de uma praia paradisíaca no Rio Grande do Norte, Pipa é um destino que não pode faltar na sua lista! Com suas praias deslumbrantes, falésias imponentes e uma atmosfera descontraída, Pipa oferece uma experiência única para os amantes da natureza e dos momentos relaxantes à beira-mar.",
            img: Image,
        },
    ]

    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) =>(
                    <div className="post" key={post.id}>
                        <div class="img">
                            <img src={post.img} alt="Imagem da postagem"/>
                        </div>
                        <div className='content'>
                            <h1>{post.title}</h1>
                            <p>{post.desc.substring(0, 138)}{post.desc.length > 138 ? '...' : ''}</p>
                            <Link className="links btn-ler-mais" to={`/post/${post.id}`}>
                                Ler mais
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;