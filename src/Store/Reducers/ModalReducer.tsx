import {
    OPEN_AND_CLOSE_MODAL_DATA_CLIMATE,
} from "../Types/ModalType.tsx";

interface IStateModal {
    showModalDataClimate: boolean,
}
const initialStateModal: IStateModal = {
    showModalDataClimate: false,
}

const modalReducer = function (state = initialStateModal, action: { type: any; payload: any }): IStateModal {
    switch (action.type) {
        case OPEN_AND_CLOSE_MODAL_DATA_CLIMATE:
            return {
                showModalDataClimate:action.payload,
            }
        default:
            return state;
    }
}

export default modalReducer;