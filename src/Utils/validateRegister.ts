export function validateRegister(email: string, password: string, repeatPassword: string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailOk = emailPattern.test(email);
    if (email === '') {
        return 'Email requerido';
    }
    if (!emailOk) {
        return 'ejemplo@correo.com'
    }
    if (password === '') {
        return 'Password requerido';
    }
    if (repeatPassword === '') {
        return 'password de confirmación requerido';
    }
    if (password !== repeatPassword) {
        return 'password no coincide';
    }
    return true;
}