import {LoginStyled} from "./LoginStyled.tsx";



export default function Login(): JSX.Element {
    return (
        <LoginStyled>
            <div className="container-login">
                <form className="form-login">
                    <span className="header-login">INICIAR SESIÓN</span>
                    <div className="content-container-input">
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Ingrese Usuario"
                                className="input-style"
                            />
                        </div>
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="Ingrese Contraseña"
                            className="input-style"/>
                    </div>

                    <button type="submit" className="button-login">INGRESAR</button>
                    <span className="remember-password">Olvide mi contraseña</span>
                    <button type="submit" className="button-register">REGISTRARSE</button>
                </form>
            </div>
        </LoginStyled>
    );
}