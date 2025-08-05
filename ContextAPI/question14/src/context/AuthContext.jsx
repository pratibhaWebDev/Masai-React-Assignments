import {createContext,useState} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider =({children})=>{
    const [isAuth, setIsAuth] = useState(false)

    const authToggle =()=>{
        setIsAuth(!isAuth)
    }

    return (
        <AuthContext.Provider value={{isAuth,authToggle}}>
            {children}
        </AuthContext.Provider>
    )
}