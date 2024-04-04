import React from 'react';
import '../css/style.css';
import '../css/App2.css';
import {Link} from 'react-router-dom';

export default function Form() {
    return (
        <>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input className="input-field-signin" type="text" name="" required />
                        <label>Email</label>
                        </div>
                    <div className="user-box">
                        <input className="input-field-signin" type="password" name="" required />
                        <label>Password</label>
                    </div>
                    <div className="continue-btn">
                    <Link to="#" id='continue-btn-inside'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Continue  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                    </div>
                </form>
            </div>

        </>
    )
}
