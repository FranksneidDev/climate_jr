import axios from "axios";
import {apiKey,urlBase} from "../../Utils/TestingApi/Api.ts";
import {
    CLIMATE_SEARCH,
    CLIMATE_SEARCH_FAILED,
    CLIMATE_SEARCH_SUCCESS,
    SHOW_BUTTON_SEARCH,
    UPDATE_CITY
} from "../Types/ClimateType.tsx";
import {alertError} from "../../Utils/AlertError.tsx";
import {WeatherData} from "../../Domain/Models/ClimateModel.tsx";
import {difKelvin} from "../../Utils/DifKelvin.ts";


export const getSearchClimate = (nameCity:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${urlBase}?q=${nameCity}&appid=${apiKey}`,
        headers: { }
    };
    dispatch({
        type: CLIMATE_SEARCH,
        payload: true
    })
    await axios.request(config)
        .then((response) => {
            console.log('respuesta axios redux');
            console.log(response.data);
            const climateAndCityData: WeatherData = {
                name: response.data.name,
                temp: response.data.main.temp - difKelvin
            }
            dispatch({
                type: CLIMATE_SEARCH_SUCCESS,
                payload: climateAndCityData
            })
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: CLIMATE_SEARCH_FAILED,
                payload: 'Error al obtener el clima'
            })
            alertError('Error al obtener el clima')
        });
}
export const updateCity = (city:string) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: UPDATE_CITY,
        payload: city
    });
}
export const changeShowButtonSearch = (action:boolean) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: SHOW_BUTTON_SEARCH,
        payload: action
    });
}