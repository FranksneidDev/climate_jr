import {OPEN_AND_CLOSE_MODAL_DATA_CLIMATE} from "../Types/ModalType.tsx";


export const openAndCloseModalDataClimate = (action: boolean) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: OPEN_AND_CLOSE_MODAL_DATA_CLIMATE,
        payload: action
    });
}