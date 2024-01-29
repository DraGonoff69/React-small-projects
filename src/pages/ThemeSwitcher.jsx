import React, { useEffect,useState } from 'react'
import { ThemeProvider } from '../../context/Theme'
import ButtonTheme from '../components/ButtonTheme';
import CardTheme from '../components/CardTheme';

const ThemeSwitcher = () => {

    const [themeMode, setThemeMode] = useState("Light");
    const lightTheme = () => {
        setThemeMode("light");
    }
    const darkTheme = () => {
        setThemeMode("dark");
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("dark","light");
        document.querySelector('html').classList.add(themeMode.toLowerCase());
    },[themeMode])
    return (
        <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* themeBtn*/}
                <ButtonTheme/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                                {/* Card*/}
                                <CardTheme/>
                
                </div>
            </div>
        </div>
        </ThemeProvider>

    )
}

export default ThemeSwitcher
