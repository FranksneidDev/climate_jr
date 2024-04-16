import {OPEN_AND_CLOSE_MODAL_DATA_CLIMATE, OPEN_AND_CLOSE_MODAL_REGISTER} from "../Types/ModalType.tsx";


export const openAndCloseModalDataClimate = (action: boolean) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: OPEN_AND_CLOSE_MODAL_DATA_CLIMATE,
        payload: action
    });
}
export const openAndCloseModalRegister = (action: boolean) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: OPEN_AND_CLOSE_MODAL_REGISTER,
        payload: action
    });
}