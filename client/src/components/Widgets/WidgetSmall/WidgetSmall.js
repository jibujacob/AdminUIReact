
import React from 'react'

import "./WidgetSmall.scss";

import {profile_img} from "../../../configurations/configurations.js"

import VisibilityIcon from '@mui/icons-material/Visibility';

function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <h3 className="widgetSmallTitle">New Join Members</h3>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img className="widgetSmallImg"
                        src={profile_img}
                        alt=""
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Alex Mathews</span>
                        <span className="widgetSmallUserTitle">Data Analyst</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityIcon className="widgetSmallIcon"/> Display
                    </button>
                </li>

                <li className="widgetSmallListItem">
                    <img className="widgetSmallImg"
                        src={profile_img}
                        alt=""
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Sijin Mathews</span>
                        <span className="widgetSmallUserTitle">QA Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityIcon className="widgetSmallIcon"/> Display
                    </button>
                </li>

                <li className="widgetSmallListItem">
                    <img className="widgetSmallImg"
                        src={profile_img}
                        alt=""
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Jibu Jacob</span>
                        <span className="widgetSmallUserTitle">Data Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityIcon className="widgetSmallIcon"/> Display
                    </button>
                </li>

                <li className="widgetSmallListItem">
                    <img className="widgetSmallImg"
                        src={profile_img}
                        alt=""
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Akshay Kumar</span>
                        <span className="widgetSmallUserTitle">Data Analyst</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityIcon  className="widgetSmallIcon"/> Display
                    </button>
                </li>

                <li className="widgetSmallListItem">
                    <img className="widgetSmallImg"
                        src={profile_img}
                        alt=""
                    />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Sanjay Kumar</span>
                        <span className="widgetSmallUserTitle">Test Analyst</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityIcon className="widgetSmallIcon"/> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSmall

