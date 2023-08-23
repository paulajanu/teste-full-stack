import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/components/write.scss'

const Write = () => {
    const state = useLocation().state;
    const [title, setTitle] = useState(state?.title || '');
    const [value, setValue] = useState(state?.body || '');
    const [image, setImage] = useState(state?.image || '');
    const navigate = useNavigate();
    const owner = JSON.parse(localStorage.getItem('login'));

    const url = 'http://localhost:3000/posts';

    const postOrEdit = async (event) => {
        event.preventDefault();
        const method = state ? 'PUT' : 'POST';
        const postId = state ? state.id : null;

        try {
            const response = await fetch(postId ? `${url}/${postId}` : url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    owner,
                    title,
                    body: value,
                    image,
                    created_at: new Date(),
                })
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            const data = await response.json();
            console.log(postId ? 'Post atualizado:' : 'Novo post criado:', data);
            navigate('/');
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    return (
        <div className='add'>
            <form onSubmit={(event) => postOrEdit(event)}>
                <div className='add-content'>
                    <label htmlFor="title">
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            placeholder="Título" 
                            value={title}
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
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                            required
                        />
                    </label>
                    <div className='editor-container'>
                           <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                    </div>
                    <button type="submit" className='btn-publish'>
                        {state ? 'Atualizar Post' : 'Publicar'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Write;
