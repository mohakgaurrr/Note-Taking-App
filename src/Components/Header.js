import React from "react";
// import {MdDarkMode} from "react-icons/md";
import { MdLightMode} from "react-icons/md";

const Header = ({handleToggleDarkMode, darkMode}) => {
    return (
        <div className = "header">
            <h1>Notes</h1>
            {/* <button 
                onClick={() => {
                    handleToggleDarkMode( (previousDarkMode) => !previousDarkMode )
                }}
                className = "save"
            >Toggle Mode</button> */}
            <MdLightMode 
                size = "1.3em" 
                className = "save" 
                onClick={() => {
                    handleToggleDarkMode( (previousDarkMode) => !previousDarkMode )
                }}
            />
        </div>
    )
}

export default Header;