import jwtDecode from "jwt-decode"

/** Permet de récupérer le token de l'utilisateur depuis le localStorage */
export const getToken = () => {
    return localStorage.getItem('token')
}

/** Permet de setter le token de l'utilisateur dans le localStorage */
export const setToken = (token: string) => {
    return localStorage.setItem('token', token)
}

/** Permet de vérifier la validité d'un token donné, et vérifier que celui-ci est valide */
export const checkTokenValidity = (token: string) => {
    const decodedToken = jwtDecode(token);
    // TODO:  gestion du décodage du token
    return decodedToken === ""
}