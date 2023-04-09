import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Chitietbaiviet() {
    const { id } = useParams();
    const [blogData, setBlogData] = useState({})
    useEffect(() => {
        async function getBlog(){
          const res = await axios.get(`http://localhost:8080/api/blogs/${id}`);
          return res;
        }
        getBlog().then((res) => setBlogData(res.data));
      }, [id]);

    return (
        <>
            <section class="product-details spad">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__pic">
                                <div class="product__details__pic__item">
                                    <img src={process.env.PUBLIC_URL + `/assets/img/product/${blogData?.image_blog}`} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__text">
                                <h3>{blogData?.title}</h3>
                                <div class="product__details__price">  </div>

                                <ul>
                                    <li><b>Chia sẻ</b>
                                        <div class="share">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/hoanglam7996" target="_blank"><i class="fa fa-facebook"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="product__details__tab">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Nội dung bài viết</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div class="product__details__tab__desc">
                                            <p>{blogData?.content}</p>
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

export default Chitietbaiviet