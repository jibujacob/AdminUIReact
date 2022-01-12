import React from 'react';

import "./NavBar.scss";

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

import {profile_img} from "../../configurations/configurations.js";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navbarLeft">
                    <span className="logo">jjadmin</span>
                </div>
                <div className="navbarRight">
                    <div className="navbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBagde">2</span>
                    </div>
                    <div className="navbarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBagde">2</span>
                    </div>
                    <div className="navbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img 
                        src={profile_img}
                        alt="profile_img"
                        className="profile_img"
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
