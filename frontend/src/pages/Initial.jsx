import React, { useEffect, useState } from 'react';
import Logo from '../img/logo-voe-descobertas-branca.png';
import { useNavigate } from 'react-router-dom';
import '../styles/components/initial.scss';

const Initial = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
    }, []);

    function handleSubmit() {
        localStorage.setItem('login', JSON.stringify(user));
        navigate('/');
    };

    return (
        <div className='initial'>
            <img src={Logo} alt="Logo Voe Descobertas"/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Nome do usuário" 
                        onChange={({target}) => setUser(target.value)}
                        required
                    />
                </label>
                <button type="submit" className='btn-entrar'>Entrar</button>
            </form>
        </div>
    )
}

export default Initial;