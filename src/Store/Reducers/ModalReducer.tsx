import {
    OPEN_AND_CLOSE_MODAL_DATA_CLIMATE, OPEN_AND_CLOSE_MODAL_REGISTER,
} from "../Types/ModalType.tsx";

interface IStateModal {
    showModalDataClimate: boolean,
    showModalRegister: boolean,
}
const initialStateModal: IStateModal = {
    showModalDataClimate: false,
    showModalRegister: false,
}

const modalReducer = function (state = initialStateModal, action: { type: any; payload: any }): IStateModal {
    switch (action.type) {
        case OPEN_AND_CLOSE_MODAL_DATA_CLIMATE:
            return {
                showModalDataClimate:action.payload,
                showModalRegister: state.showModalRegister,
            }
        case OPEN_AND_CLOSE_MODAL_REGISTER:
            return {
                showModalDataClimate: state.showModalDataClimate,
                showModalRegister: action.payload,
            }
        default:
            return state;
    }
}

export default modalReducer;