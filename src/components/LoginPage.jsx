import React, { useCallback, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LoginPage() {
    const { login } = useContext(UserContext);
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    const navigate = useNavigate();

    const handleLogin = useCallback(() => {
        const username = usernameInput.current.value;
        const password = passwordInput.current.value;
        if (
            username.length < 4 ||
            username.length > 20 ||
            password.length < 4 ||
            password.length > 20
        ) {
            return;
        }
        login(username);
        navigate("/search");
    }, []);
    return (
        <div className="login-form flex flex-column">
            <h3 className="text-center">Login</h3>
            <div className="form-element flex flex-column">
                <label htmlFor="username">Username</label>
                <input ref={usernameInput} type="text" id="username" />
            </div>
            <div className="form-element flex flex-column">
                <label htmlFor="password">Password</label>
                <input ref={passwordInput} type="password" id="password" />
            </div>
            <button className="login-btn" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default LoginPage;