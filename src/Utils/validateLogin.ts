export function validateLogin(email: string, password: string) {
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
    return true;
}