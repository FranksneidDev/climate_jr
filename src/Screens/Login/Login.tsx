import {LoginStyled} from "./LoginStyled.tsx";
import SignIn from "../../Components/SignIn/SignIn.tsx";
import SignUp from "../../Components/SignUp/SignUp.tsx";
import {useAppSelector} from "../../Hooks/ReduxHook.tsx";



export default function Login(): JSX.Element {

    const showModalRegister = useAppSelector((state) => state.modalState.showModalRegister);

    return (
        <LoginStyled>
            {!showModalRegister &&
                <SignIn/>
            }

            {showModalRegister &&
                <SignUp/>
            }
        </LoginStyled>
    );
}