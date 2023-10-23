import React from "react";


const Header = ({handleToggleDarkMode, darkMode}) => {

    return (
        <div className = "header">
            <h1>Notes</h1>
            <button 
                onClick={() => {
                    handleToggleDarkMode( (previousDarkMode) => !previousDarkMode )
                }}
                className = "save"
            >Toggle Mode</button>                    
        </div>
    )
}

export default Header;