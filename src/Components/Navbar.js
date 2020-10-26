import React,{useContext} from 'react';
import Switch from '@material-ui/core/Switch';
import '../Styles/Navbar.css';
import {ThemeContext} from '../Contexts/ThemeContext';
function Navbar(){
    const { isDarkMode, toggle } = useContext(ThemeContext);
    const styles = {
        backgroundColor: isDarkMode ? "#91eae4" : "#2c3e50",
        color: isDarkMode ? "black" : "white"
      };

    let mode = 'Dark Mode';
    if(!isDarkMode)mode = 'Light Mode'
    let symbol = '</>';

    return(
        <div className="sticky-navbar" style={styles}>
            <p> {symbol} Programmers - Joke App</p>
            <div>
                <Switch size="medium" color="primary" onChange={toggle} />
                <p style={{fontSize:"14px"}}>{mode}</p>
            </div>
            <img alt="laught-emoji" src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'/>
        </div>
    )
}

export default Navbar;
