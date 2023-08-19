import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaFileImage } from "react-icons/fa";
import '../styles/components/write.scss';

const Write = () => {
    const [value, setValue] = useState('');

    console.log(value)

    return (
        <div className='add'>
            <div className='add-content'>
                <input type="text" placeholder='Título'/>
                <div className='add-image'>
                    <input style={{display: "none"}} type="file" id="file" name=""/>
                    <label htmlFor="file"><FaFileImage className='icon-image'/>Adicionar imagem</label>
                </div>
                <div className='editor-container'>
                    <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                </div>
                <button className='btn-publish'>Publicar</button>
            </div>
        </div>
    )
}

export default Write;