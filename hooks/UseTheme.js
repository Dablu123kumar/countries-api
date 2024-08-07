import { useContext } from "react"
import { ThemeContext } from "../Contexts/TheamContext"

export function UseTheme(){
    const [isDark] = useContext(ThemeContext)
    return useContext(ThemeContext)
}