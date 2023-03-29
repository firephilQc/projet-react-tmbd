import { useState, useEffect } from "react";

function UserDarkMode(){
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    useEffect(() =>{
        const body = document.querySelector('body');
        if (darkMode) {
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
        }
    }, [darkMode]);
    return [darkMode, toggleDarkMode];
}
export default UserDarkMode
