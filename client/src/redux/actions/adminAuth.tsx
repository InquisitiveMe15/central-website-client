export const loginAdmin = () => async(dispatch : any) =>{
    dispatch({type:"ADMIN_LOGIN"})
}

export const logoutAdmin = () => async(dispatch : any) =>{
    dispatch({type:"ADMIN_LOGOUT"})
}

