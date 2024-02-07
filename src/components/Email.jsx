import React, { useState } from "react";

function Email({ onLoginFormSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLoginFormSubmit(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <h4>*Componente Email</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Email;