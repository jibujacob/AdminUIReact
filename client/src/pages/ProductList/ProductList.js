import React ,{useState}from 'react'

import "./ProductList.scss";

import { DataGrid } from '@mui/x-data-grid';
import {productRows} from "../../dummydata.js";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";

function ProductList() {
    const [productdata,setProductData] = useState(productRows);

    function handleDelete(row_id){
        setProductData(productdata.filter(data => data.id!==row_id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product Name', width: 200 ,
            renderCell: (params) => {
                return (<div className="productListProduct">
                    <img className="productListImg" src={params.row.image} alt=""/>
                    {params.row.product}
                    </div> )}
            },
        { field: 'stock', headerName: 'Stock', width: 150 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 150
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell : (params) => {
                return (
                    <>
                        <Link to={"/product/"+params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                    
                )
            }
          },
      ];

    return (
        <div className="productList">
            <DataGrid
                rows={productdata}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList
