import React from 'react'
import { Link } from 'react-router-dom';

import "./Product.scss";
import { productData } from '../../dummydata';
import Chart from '../../components/Chart/Chart';
import { product_img } from '../../configurations/configurations';

import PublishIcon from '@mui/icons-material/Publish';

function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData}
                        title="Product Performance"
                        dataKey="Sales"
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product_img}
                            alt="product_img"
                            className="productInfoImg"
                            />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label>In Stock</label>
                        <select name="instock" id="instock" >
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active" >
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product_img}
                                alt="product_img"
                                className="productUploadImg"
                                />
                            <label htmlFor="file">
                                <PublishIcon className="productUploadIcon"/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Product
