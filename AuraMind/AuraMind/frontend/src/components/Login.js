import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();
            if (result.status === 'success') {
                navigate('/chat');
            } else {
                setError(result.error);
            }
        } catch (error) {
            setError('An error occurred during login.');
        }
    };

    return (
        <div>
            <div id="image-container">
                <img src="/Aura.png" alt="Login Icon" />
            </div>
            <div id="login-form">
                <h2>Login</h2>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-field" />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-field" />
                    </label>
                    <button type="submit" id="login-button">Login</button>
                </form>
            </div>
        </div>
    );    
};

export default Login;
