import jwtDecode from "jwt-decode"

export const getToken = () => {
    return localStorage.getItem('token')
}

export const setToken = (token: string) => {
    return localStorage.setItem('token', token)
}

export const checkTokenValidity = (token: string) => {
    const decodedToken = jwtDecode(token);
    // TODO:  gestion du décodage du token
    return decodedToken === ""
}