import React, { useEffect, useState } from "react"
import ProductTwo from "../../components/Product/product2";
import Banner from "../../assets/img/banner-2.png";
import axios from "axios";

export default function SeeAll() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios('/products')
            .then(res => res.data)
            .then(data => {
                if (data.success) setData(data.products)
            }).catch(err => console.log(err))
    }, [])
    return (
        <div className="page-2">
            <div className="banner-container">
                <div className="banner">
                    <img src={Banner} />
                </div>
            </div>
            <div className="product-container">
                <div className="label">
                    <span>FOODS</span>
                </div>
                <div className="product-list">
                    {
                        data.map((item, key) => (
                            <div key={key}>
                                <ProductTwo id={item._id} source={item.img} className={'product2'} title={item.name} desc={item.description} price={item.price} button_value={"Add Cart"} history={''} />
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}