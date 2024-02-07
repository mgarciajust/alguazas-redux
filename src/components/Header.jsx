import React from "react"
import { useSelector } from "react-redux"

function Header() {
    const email = useSelector((state) => state.user.email)
    const role = useSelector((state) => state.user.role)
    const token = useSelector((state) => state.user.token)

    return (
        <header>
            <h4>*Componente Header</h4>
            <p>Email: {email}</p>
            {token && (
                <>
                    <p>Role: {role}</p>
                    <p>Token: {token}</p>
                </>
            )}
        </header>
    );
}

export default Header