import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/home.scss';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const url = 'http://localhost:3000/posts';

    const getPosts = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('login')) navigate('/initial');

        getPosts();
    }, []);

    const getDescription = (desc, maxLength) => {
        return desc.length > maxLength ? desc.substring(0, maxLength) + '...' : desc;
    };

    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) =>(
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.image} alt="Imagem da postagem"/>
                        </div>
                        <div className='content'>
                            <h1>{post.title}</h1>
                            <p>
                                {window.innerWidth <= 999
                                    ? getDescription(post.body, 80)
                                    : getDescription(post.body, 220)
                                }
                            </p>
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
