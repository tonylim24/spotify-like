import React from 'react'
import '../stylesheets/Login.css';
// Because on spotify we use export const we have to use { constName }.
// If we export default such as function or class, we do not need {}
// You cannot export default const.
import { loginUrl } from '../spotify';

function Login() {
    return (
        <div className="login">
            <div className="login__header">
                {/* Spotify Logo */}
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/220px-Spotify_logo_with_text.svg.png" 
                    alt="Spotify Logo"/>
            </div>
            <hr/>

            {/* Spotify Login */}
            <div className="login-content">
                <p className="login-content__p">To continue, log in to Spotify.</p>
                <a href={loginUrl}>
                    <button className="login-content__button">Login With Spotify</button>
                </a>
            </div>
        </div>
    )
}

export default Login
