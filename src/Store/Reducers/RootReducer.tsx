import {combineReducers} from "@reduxjs/toolkit";
import climateReducer from "./ClimateReducer.tsx";
import modalReducer from "./ModalReducer.tsx";

const RootReducer = combineReducers({
    climateState:climateReducer,
    modalState: modalReducer,


});
export default RootReducer;