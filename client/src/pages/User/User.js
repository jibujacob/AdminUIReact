import React from 'react'

import "./User.scss";
import {profile_img} from "../../configurations/configurations.js";

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={profile_img}
                            alt="profile_img"
                            className="userShowTopImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowJobTitle">Software Engineer</span>        
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>

                        <div className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">+91 123 465 67</span>
                        </div>
                        <div className="userShowInfo">
                            <EmailOutlinedIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon className="userShowIcon"/>
                            <span className="userShowInfoTitle">New York | USA </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label> Username</label>
                                <input type="text"
                                    placeholder="annabeck99"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label> Full Name</label>
                                <input type="text"
                                    placeholder="Anna Becker"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label> Email</label>
                                <input type="text"
                                    placeholder="annabeck99@gmail.com"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label> Phone</label>
                                <input type="text"
                                    placeholder="+91 123 465 67"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label> Address</label>
                                <input type="text"
                                    placeholder="New York | USA"
                                    className="userUpdateInput"
                                    />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={profile_img}
                                    alt="profile_img"
                                    className ="userUpdateImg"
                                    />

                                <label htmlFor="file">
                                    <PublishIcon className="userUpdateIcon"/>
                                </label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateRButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
