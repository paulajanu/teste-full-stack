import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/write.scss'

const Write = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const owner = JSON.parse(localStorage.getItem('login'));

    const url = 'http://localhost:3000/posts';

    const createPost = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    owner,
                    title,
                    body,
                    image,
                    created_at: new Date(),
                })
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const data = await response.json();
            console.log('Novo post criado:', data);
            navigate('/');
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    return (
        <div className='add'>
            <form onSubmit={(event) => createPost(event)}>
                <div className='add-content'>
                    <label htmlFor="title">
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            placeholder="Título" 
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="url">
                        <input 
                            type="text" 
                            name="url" 
                            id="url" 
                            placeholder="URL da imagem" 
                            onChange={(event) => setImage(event.target.value)}
                            required
                        />
                    </label>
                    <div className='editor-container'>
                        <label htmlFor="body">
                            <textarea
                                name="body"
                                id="body"
                                placeholder="Digite o conteúdo"
                                onChange={(event) => setBody(event.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" value="Criar Post" className='btn-publish'>Publicar</button>
                </div>
            </form>
        </div>
    )
}

export default Write;