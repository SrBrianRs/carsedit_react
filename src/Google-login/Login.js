import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import AddClip from "../components/add-carsedit.component";
import "./Login.css";


function Login() {

    const [value, setValue] = useState("")
    const handelClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.displayName)
            localStorage.setItem("user", data.user.displayName)
            window.location.reload();
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('user'))
    }, [])

    return (
        <div>
            {value ? <AddClip /> :
                <div className="container">
                    <button class="google-login-button" onClick={handelClick}>
                        <span class="icon"></span>
                        Iniciar sesión con Google
                    </button>
                </div>
            }
        </div>
    )
};

export default Login;
