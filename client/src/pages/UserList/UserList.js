import React, { useState } from 'react'

import "./UserList.scss";
import {rows} from "../../dummydata.js"

import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";

function UserList() {
    const [userdata,setUserData] = useState(rows);

    function handleDelete(row_id){
        setUserData(userdata.filter(data => data.id!==row_id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'Username', width: 200 ,
            renderCell: (params) => {
                return (<div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.userName}
                    </div> )}
            },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transactions',
          headerName: 'Transaction',
          width: 150
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell : (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                    
                )
            }
          },
      ];
      
    return (
        <div className="userlist">
            <DataGrid
        rows={userdata}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}

export default UserList
