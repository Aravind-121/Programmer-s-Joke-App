import React,{createContext} from 'react';
import useToggleHook from '../Hooks/useToggleHook';

export const ThemeContext = createContext(); 

export function ThemeProvider(props){
    const [isDarkMode,toggle] = useToggleHook(false);
    return(
        <ThemeContext.Provider value={{isDarkMode,toggle}}>
            {props.children}
        </ThemeContext.Provider>
    )
}