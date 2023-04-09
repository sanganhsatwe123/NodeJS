import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/img/hero/bannerweb1.jpg";
import axios from "axios";

function Trangchu() {
  const [product, setProduct] = useState([]);
  const [blog, setBlog] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8080/api/products");
      const req1 = await axios.get("http://localhost:8080/api/blogs");
      console.log(req.data);
      setProduct(req.data);
      setBlog(req1.data);
      return req, req1;
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>Danh Mục Sản Phẩm</span>
                </div>
                <ul>
                  <li>
                    <a href="#">Quần Áo Bóng Đá</a>
                  </li>
                  <li>
                    <a href="#">Quần Áo Thể Thao</a>
                  </li>
                  <li>
                    <a href="#">Dụng Cụ Tập Luyện Thể Thao</a>
                  </li>
                  <li>
                    <a href="#">Dụng Cụ Tập Luyện Bóng Đá</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>01232585719</h5>
                    <span>Hỗ Trợ Khách Hàng 24/7</span>
                  </div>
                </div>
              </div>
              <div className="hero__item set-bg" data-setbg={Logo}>
                <div className="hero__text">
                  <span>Cửa Hàng Đồ Thể Thao SĐLB</span>
                  <h2>
                    Các Sản Phẩm <br />
                    Cam Kết 100% Chính Hãng
                  </h2>
                  <p>Hãy Lựa Chọn Các Sản Phẩm Phù Hợp Nhất Cho Mình</p>
                  <a href="#" className="primary-btn">
                    Mua Sắm Ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Các Sản Phẩm Nổi Bật</h2>
              </div>
              <div className="featured__controls"></div>
            </div>
          </div>
          <div className="row featured__filter">
            {product.map(p => {
              return (
                <>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix dungcutapluyenthethao">
                    <div className="featured__item">
                      <div className="featured__item__pic set-bg">
                        <img src={process.env.PUBLIC_URL + `/assets/img/product/${p?.image}` } height={270} />
                        <ul className="featured__item__pic__hover">
                          <li>
                            <a href={`/chi-tiet-san-pham/${p?.id}`}>
                              <i className="fa fa-retweet"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6>
                          <a href={`/chi-tiet-san-pham/${p?.id}`}>{p.product_name}</a>
                        </h6>
                        <h5>{p.price}</h5>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>

      <section class="from-blog spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title from-blog__title">
                <h2>Các Bài Viết Liên Quan</h2>
              </div>
            </div>
          </div>
          <div class="row">
            {blog.map(b => {
              return (
                <>
                  <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="blog__item">
                      <div class="blog__item__pic">
                        <img src={process.env.PUBLIC_URL + `/assets/img/product/${b?.image_blog}`} height={350} alt="" />
                      </div>
                      <div class="blog__item__text">
                        <ul>
                          <li>
                            <i class="fa fa-calendar-o"></i> {b.createsAt}{" "}
                          </li>
                          <li>
                            <i class="fa fa-comment-o"></i> 5
                          </li>
                        </ul>
                        <h5>
                          <a href={`/chi-tiet-bai-viet/${b?.id}`}>
                            {b.title}
                          </a>
                        </h5>
                        <p>
                          {b.content?.slice(0, 100)+"..."}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Trangchu;
