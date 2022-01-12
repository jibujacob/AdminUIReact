import React from 'react'

import "./NewUser.scss"

function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type ="text" placeholder="john"/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type ="text" placeholder="John Smith"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type ="email" placeholder="john@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type ="password" placeholder="password"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type ="text" placeholder="+1 123 456 78"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type ="text" placeholder="New York | USA"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type ="radio" name="gender" id="male" value="male"/>
                        <label htmlFor="male">Male</label>
                        <input type ="radio" name="gender" id="female" value="female"/>
                        <label htmlFor="male">Female</label>
                        <input type ="radio" name="gender" id="others" value="others"/>
                        <label htmlFor="male">Others</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    )
}

export default NewUser