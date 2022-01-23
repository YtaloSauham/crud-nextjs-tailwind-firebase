import { createContext, useEffect, useState } from "react";



type Modo= 'form' | 'table' 


interface AppContextProps{
    modo?: Modo
    alternateModo?:() => void
    tema?: string
    alternarTema?: () => void
   

}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const [theme,setTheme]=useState('');
    const [modo,setModo]= useState<Modo>('table')


   function alternateModo(){
        
            if(modo === 'form'){
                setModo('table')
            } else{
                setModo('form')
            }
              
            }

    // useEffect(() =>{
    //     const themeLocal = localStorage.getItem('tema')
    //     setTheme(themeLocal)
    // },[])
   
    // function alternarTema(){
    //     const novoTema= theme=== 'dark' ? '' : 'dark'
    //     setTheme(novoTema)
    //     localStorage.setItem('tema',novoTema)
        
    // }

    return ( 
        <AppContext.Provider value={{
            tema: theme,
            modo:modo,
            alternateModo,
            
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
// export const AppConsumer = AppContext.Consumer