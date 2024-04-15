import {
    CLIMATE_SEARCH,
    CLIMATE_SEARCH_FAILED,
    CLIMATE_SEARCH_SUCCESS,
    SHOW_BUTTON_SEARCH,
    UPDATE_CITY
} from "../Types/ClimateType.tsx";
import {WeatherData} from "../../Domain/Models/ClimateModel.tsx";

interface IStateClimate {
    isLoadingSearchClimate: boolean;
    climateAndCitySearch: WeatherData | null;
    city: string;
    showButtonSearch: boolean;
}

const initialStateClimate: IStateClimate = {
    isLoadingSearchClimate: false,
    climateAndCitySearch: null,
    city: '',
    showButtonSearch: true,
}

const climateReducer = function (state = initialStateClimate, action: { type: any; payload: any }): IStateClimate {
    switch (action.type) {
        case CLIMATE_SEARCH:
            return {
                isLoadingSearchClimate:action.payload,
                climateAndCitySearch: state.climateAndCitySearch,
                city: state.city,
                showButtonSearch: state.showButtonSearch,
            }
        case CLIMATE_SEARCH_SUCCESS:
            return {
                isLoadingSearchClimate:false,
                climateAndCitySearch: action.payload,
                city: state.city,
                showButtonSearch: state.showButtonSearch,
            }
        case CLIMATE_SEARCH_FAILED:
            return {
                isLoadingSearchClimate:false,
                climateAndCitySearch: state.climateAndCitySearch,
                city: state.city,
                showButtonSearch: state.showButtonSearch,
            }
        case UPDATE_CITY:
            return {
                isLoadingSearchClimate:state.isLoadingSearchClimate,
                climateAndCitySearch: state.climateAndCitySearch,
                city: action.payload,
                showButtonSearch: state.showButtonSearch,
            }
        case SHOW_BUTTON_SEARCH:
            return {
                isLoadingSearchClimate:state.isLoadingSearchClimate,
                climateAndCitySearch: state.climateAndCitySearch,
                city: state.city,
                showButtonSearch: action.payload,
            }
        default:
            return state;
    }
}

export default climateReducer;