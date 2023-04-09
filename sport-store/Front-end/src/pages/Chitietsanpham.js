import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Chitietsanpham() {
    const { id } = useParams();
    const [productData, setProductData] = useState({})
    useEffect(() => {
        async function getProduct(){
          const res = await axios.get(`http://localhost:8080/api/products/${id}`);
          return res;
        }
        getProduct().then((res) => setProductData(res.data));
      }, [id]);

    return (
        <>
            <section class="product-details spad">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__pic">
                                <div class="product__details__pic__item">
                                <img src={process.env.PUBLIC_URL + `/assets/img/product/${productData?.image}`} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__text">
                                <h3>{productData?.product_name}</h3>
                                <div class="product__details__price">Giá: {productData?.price}</div>

                                <div class="product__details__quantity">
                                    <form action="./shop-cart.php" method="POST" class="quantity">
                                        <div class="pro-qty">
                                            <input type="text" name="quantity" value="1"/>
                                                <input type="hidden" name="productname" value=""/>
                                                <input type="hidden" name="productprice" value=""/>
                                                <input type="hidden" name="productimg" value=""/>
                                        </div>
                                        <input type="submit" class="primary-btn" name="btnsubmit" value="Thêm vào giỏ hàng"/>
                                    </form>
                                </div>
                                <ul>
                                    <li><b>Chia sẻ</b>
                                        <div class="share">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/hoanglam7996" target="_blank"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="product__details__tab">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Mô tả sản phẩm</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div class="product__details__tab__desc">
                                            <p>{productData.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chitietsanpham