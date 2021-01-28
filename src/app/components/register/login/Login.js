import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/register.css';

function Login(props) {
    // Bước 1: khai báo State - gồm 2 phần tử input và setInput.
    // Bước 2: khai báo inputs = {} object.
    // Bước 3: function handleChange(e), nhận 2 trường name, value;
    // Bước 4: onChange - khi input thay đổi thì gọi handleChange()
    // Bước 5: setInputs(giá trị input => ({...inputs, [name]: value))
    // Bước 6: Khi nhấn Submit => 
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    function handleChange(event){
        const { name, value } = event.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        if(username && password) {
            (username === 'admin') ? alert('admin') : alert('quest');
        }

    }
    return (
        <div className="container">
            <form id="form-login" className="form" onSubmit={handleSubmit}>
                <h2>Login With Us</h2>
                <div className={'form-control' + ((submitted && !username) ? ' error' : ' ')}>
                    <label htmlFor="username">Username</label>
                    <input name="username" value={username} onChange={handleChange} type="text" id="username-login" placeholder="Enter username" />
                    <small>Error username !</small>
                </div>
                <div className={"form-control" + ((submitted && !password) ? ' error' : ' ')}>
                    <label htmlFor="password">Password</label>
                    <input name="password" value={password} onChange={handleChange} type="password" id="password-login" placeholder="Enter password" />
                    <small>Error password !</small>
                </div>
                <button type="submit">Submit</button>
               
            </form>
            <div className="group">
                <Link to="/" className="btn-link">Back</Link>
                <Link to="/register" className="btn-link">Register</Link>
               
            </div>
        </div>

    );
}

export default Login;