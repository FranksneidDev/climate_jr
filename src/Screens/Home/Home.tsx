import {HomeStyled} from "./HomeStyled.tsx";
import FormComponent from "../../Components/Form/FormComponent.tsx";
import ModalDataComponent from "../../Components/Modal/ModalDataComponent.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../Hooks/ReduxHook.tsx";


export default function Home(): JSX.Element {

    const showModalDataClimate = useAppSelector((state) => state.modalState.showModalDataClimate);

    useEffect(() => {
        console.log('esta es la vaiable que oculta el modal');
        console.log()
    }, []);

    return (
        <HomeStyled>
            <div className="header-container">
                <h1 className="header-text">Weather-App</h1>
            </div>
            <FormComponent/>
            {showModalDataClimate &&
                <ModalDataComponent/>
            }
        </HomeStyled>
    );
}