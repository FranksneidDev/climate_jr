import {SignUpStyled} from "./SignUpStyled.tsx";
import {useAppDispatch} from "../../Hooks/ReduxHook.tsx";
import {openAndCloseModalRegister} from "../../Store/Actions/ModalAction.tsx";
import React, {useState} from "react";
import {validateRegister} from "../../Utils/validateRegister.ts";
import {alertError} from "../../Utils/AlertError.tsx";
import {register} from "../../Firebase/Firebase.tsx";


export default function SignUp(): JSX.Element {

    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    function handleRedirectSignIn() {
        dispatch(openAndCloseModalRegister(false));
    }

    function handleRegister(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        console.log(repeatPassword);
        const responseValidationRegister = validateRegister(email, password, repeatPassword);
        if (typeof responseValidationRegister === "string") {
            alertError(responseValidationRegister);
        } else {
            register(email, password);
            resetFormRegister();
            dispatch(openAndCloseModalRegister(false));
        }
    }

    function resetFormRegister() {
        setEmail('');
        setPassword('');
        setRepeatPassword('');
    }

    return (
        <SignUpStyled>
            <form onSubmit={(event) => handleRegister(event)} className="form-login">
                <span className="header-login">REGISTRO</span>
                <div className="content-container-input">
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Ingrese email"
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
                <div className="input-container">
                    <input
                        type="password"
                        placeholder="Ingrese de nuevo la Contraseña"
                        className="input-style"
                        value={repeatPassword}
                        onChange={(event) => setRepeatPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className="button-login">REGISTRARSE</button>
                <button onClick={handleRedirectSignIn} type="button" className="button-register">INICIAR SESION</button>
            </form>
        </SignUpStyled>
    );
}


