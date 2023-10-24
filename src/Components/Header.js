import React from "react";
import {MdDarkMode, MdLightMode} from "react-icons/md";


const Header = ({handleToggleDarkMode, darkMode}) => {

    return (
        <div className = "header">
            <h1>Notes</h1>
            <div>                                    
                { darkMode ? <MdLightMode className = "theme" onClick = {() => {
                        handleToggleDarkMode( (previousDarkMode) => !previousDarkMode )
                    }} size = "1.4em"/> : <MdDarkMode className = "theme" onClick = {() => {
                        handleToggleDarkMode( (previousDarkMode) => !previousDarkMode )
                    }} size = "1.4em"/> }
            </div>
        </div>
    )
}

export default Header;