import {FormEvent, ChangeEvent} from 'react';
import {FormComponentStyled} from "./FormComponentStyled.tsx";
import {useAppDispatch, useAppSelector} from "../../Hooks/ReduxHook.tsx";
import {changeShowButtonSearch, getSearchClimate, updateCity} from "../../Store/Actions/ClimateAction.tsx";
import {openAndCloseModalDataClimate} from "../../Store/Actions/ModalAction.tsx";



export default function WeatherForm(): JSX.Element {

    const dispatch = useAppDispatch();
    const isLoadingSearchClimate = useAppSelector((state) => state.climateState.isLoadingSearchClimate);
    const showButtonSearch = useAppSelector((state) => state.climateState.showButtonSearch);
    const city = useAppSelector((state) => state.climateState.city);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (showButtonSearch) {
            dispatch(getSearchClimate(city)).then(() => {
                dispatch(openAndCloseModalDataClimate(true));
                dispatch(changeShowButtonSearch(false));
            });
        } else {
            handleCloseButtonClean();
        }
    };

    function handleCity(city: string) {
        if (city === '') {
            dispatch(updateCity(city));
            dispatch(openAndCloseModalDataClimate(false));
            dispatch(changeShowButtonSearch(true));
        }
        dispatch(updateCity(city));
    }
    function handleCloseButtonClean() {
        dispatch(openAndCloseModalDataClimate(false));
        dispatch(updateCity(''));
        dispatch(changeShowButtonSearch(true));
    }

    return (
        <FormComponentStyled>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ciudad"
                    autoFocus
                    value={city}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleCity(e.target.value)}
                />
                {showButtonSearch &&
                    <button
                        type="submit"
                        className="button"
                        disabled={isLoadingSearchClimate}
                    >
                        {!isLoadingSearchClimate ? 'Buscar' : 'Buscando...'}
                    </button>
                }
                {!showButtonSearch &&
                    <button
                        type="submit"
                        className="button"
                    >
                        Limpiar
                    </button>
                }
            </form>
        </FormComponentStyled>
    );
}


