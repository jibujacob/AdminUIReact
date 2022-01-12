import React from 'react'

import "./SideBar.scss";
import "../../App.scss";

import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {Link} from "react-router-dom"

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyleIcon className="sidebarIcons"/> Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcons"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcons"/> Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Links</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PersonOutlineIcon className="sidebarIcons"/> Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <StorefrontIcon className="sidebarIcons"/> Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcons"/> Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlinedIcon className="sidebarIcons"/> Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcon className="sidebarIcons"/> Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcons"/> Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className="sidebarIcons"/> Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineIcon className="sidebarIcons"/> Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcons"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportIcon className="sidebarIcons"/> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
