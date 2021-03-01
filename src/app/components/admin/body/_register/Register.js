import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    const [register, setRegister] = useState({
        username: "",
        password: "",
        passwordConfirm: "",
        email: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password, passwordConfirm, email } = register;
    function handleChangeRegister(event) {
        const { name, value } = event.target;
        setRegister(register => ({ ...register, [name]: value }));
    }

    function handleSubmitRegister(event) {
        event.preventDefault();
        setSubmitted(true);

        if (username && password && passwordConfirm && email) {
            alert("submit thanh cong");
        }
    }
    return (
        <div className="container register">
            <form id="from-register" className="form" onSubmit={handleSubmitRegister}>
                <h2>Register With Us</h2>
                <div className={"form-control" + ((submitted && !username) ? " error" : " ")}>
                    <label htmlFor="username">UserName</label>
                    <input name="username" value={username} onChange={handleChangeRegister} type="text" id="username-login" placeholder="Enter username" />
                    <small>Error Username !</small>
                </div>
                <div className={"form-control" + ((submitted && !password) ? " error" : " ")}>
                    <label htmlFor="password">Password</label>
                    <input name="password" value={password} onChange={handleChangeRegister} type="password" id="password" placeholder="Enter password" />
                    <small>Error message</small>
                </div>
                <div className={"form-control" + ((submitted && !passwordConfirm) ? " error" : " ")}>
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input name="passwordConfirm" value={passwordConfirm} onChange={handleChangeRegister} type="password" id="passwordConfirm" placeholder="Enter password again" />
                    <small>Error message</small>
                </div>
                <div className={"form-control" + ((submitted && !email) ? " error" : " ")} >
                    <label htmlFor="email">Email</label>
                    <input name="email" value={email} onChange={handleChangeRegister} type="text" id="email" placeholder="Enter email" />
                    <small>Error message</small>
                </div>
                <button type="submit">Submit</button>

            </form>

            <div class="group">
                <Link to="/" className="btn-link">Back</Link>
                <Link to="/logintest" className="btn-link">Login</Link>

            </div>

        </div>
    );
}

export default Register;