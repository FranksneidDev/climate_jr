import {ModalDataComponentStyled} from "./ModalDataComponentStyled.tsx";
import {useAppDispatch, useAppSelector} from "../../Hooks/ReduxHook.tsx";
import {openAndCloseModalDataClimate} from "../../Store/Actions/ModalAction.tsx";
import {changeShowButtonSearch, updateCity} from "../../Store/Actions/ClimateAction.tsx";


export default function ModalDataComponent(): JSX.Element {

    const dispatch = useAppDispatch();
    const climateAndCitySearch = useAppSelector((state) => state.climateState.climateAndCitySearch);
    const roundedTemperature = climateAndCitySearch ? Math.round(climateAndCitySearch.temp) : null;


    function handleCloseModalDataClimate() {
        dispatch(openAndCloseModalDataClimate(false));
        dispatch(updateCity(''));
        dispatch(changeShowButtonSearch(true));
    }

    return (
        <ModalDataComponentStyled onClick={handleCloseModalDataClimate}>
            <div className="weatherData-container">
                <h2>Clima en {climateAndCitySearch ? climateAndCitySearch.name : 'Ciudad'}</h2>
                <p>Temperatura: {roundedTemperature ? roundedTemperature : 0} °C</p>
            </div>
        </ModalDataComponentStyled>
    );
}