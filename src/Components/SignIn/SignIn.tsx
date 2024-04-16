import {SignInStyled} from "./SignInStyled.tsx";
import {useAppDispatch} from "../../Hooks/ReduxHook.tsx";
import {openAndCloseModalRegister} from "../../Store/Actions/ModalAction.tsx";
import React, {useState} from "react";
import {validateLogin} from "../../Utils/validateLogin.ts";
import {alertError} from "../../Utils/AlertError.tsx";
import {login} from "../../Firebase/Firebase.tsx";
import {useNavigate} from "react-router-dom";
import {alertSuccess} from "../../Utils/AlertSuccess.tsx";


export default function SignIn(): JSX.Element {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleRedirectRegister() {
        dispatch(openAndCloseModalRegister(true));
    }

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const responseValidateLogin = validateLogin(email, password);
        if (typeof responseValidateLogin === "string") {
            alertError(responseValidateLogin);
        } else {
            login(email, password).then((user) => {
                console.log('este el usuario logueado');
                console.log(user);
                if (user === 'Firebase: Error (auth/invalid-credential).') {
                    alertError(user);
                } else {
                    alertSuccess(`Bienvenido a la app del clima`);
                    navigate('/home');
                }
            })
        }
    }

    return (
        <SignInStyled>
            <form onSubmit={(event) => handleLogin(event)} className="form-login">
                <span className="header-login">INICIAR SESIÓN</span>
                <div className="content-container-input">
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Ingrese Usuario"
                            className="input-style"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        placeholder="Ingrese Contraseña"
                        className="input-style"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className="button-login">INGRESAR</button>
                <span className="remember-password">Olvide mi contraseña</span>
                <button onClick={handleRedirectRegister} type="button" className="button-register">REGISTRARSE</button>
            </form>
        </SignInStyled>
    );
}


