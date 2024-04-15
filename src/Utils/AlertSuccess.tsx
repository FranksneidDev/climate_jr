import Swal from "sweetalert2";

export function alertSuccess(message:string) {
    Swal.fire({
        icon: 'success',
        title: 'Todo salió bien',
        text: message,
        confirmButtonText: 'Aceptar'
    });
}