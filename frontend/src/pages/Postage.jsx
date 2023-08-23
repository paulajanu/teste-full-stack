import React, { useEffect, useState } from 'react';
import { FaPenFancy, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';
import DOMPurify from "dompurify";
import '../styles/components/postage.scss';

const Postage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState();
    const [reload, setReload] = useState(false);

    const url = 'http://localhost:3000/posts';

    const getPost = async (ids) => {
        try {
            const response = await fetch(`${url}/${ids}`, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setPost(data);
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    const deletePost = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            setReload(!reload);
            navigate('/');
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    useEffect(() => async () => {
        await getPost(id);
    }, [reload]);

    function getDate(date) {
        const [data, hora] = date.split('T');
        const hour = hora.substr(0, 8);
        const newVariavel = `${data} ${hour}`;
        const newDate = new Date(newVariavel);
        const longMonth = newDate.toLocaleString('pt-br', {month: 'long'});
        return `${newDate.getDate()} de ${longMonth} às ${hour}`;
    }

    return (
        <div className="postage">
            {!post ? (
                <p>Post não encontrado</p>
            ) : (post.map((posts) => (
                <div className="content" key={posts.id}>
                    <img src={posts.image} alt="Imagem da postagem"/>
                    <div className='top'>
                        <div className='info'>
                            <span>{posts.owner}</span>
                            <p>{getDate(posts.created_at)}</p>
                        </div>
                        {posts.owner === JSON.parse(localStorage.getItem('login')) && (
                            <div className='options'>
                                <Link to={`/write?edit=2`} state={posts}>
                                    <FaPenFancy className='icon-options'/>
                                </Link>
                                <Link onClick={() => deletePost(posts.id)}>
                                    <FaTrash className='icon-options'/>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className='post-content'>
                        <h1>{posts.title}</h1>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(posts.body),
                            }}
                        ></p> 
                    </div>
                </div>
            )))}
        </div>
    )
}

export default Postage;