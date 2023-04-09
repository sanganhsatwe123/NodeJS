import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Sanpham() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData(id) {
      const req = await axios.get("http://localhost:8080/api/products");
      console.log(req.data);
      setProduct(req.data);
      return req;
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Tất Cả Sản Phẩm</h2>
              </div>
              <div className="featured__controls">

              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {product.map(p => {
              return (
                <>
                  <div className="col-lg-3 col-md-4 col-sm-6 mix dungcutapluyenthethao">
                    <div className="featured__item">
                      <div className="featured__item__pic set-bg">
                        <img src={process.env.PUBLIC_URL + `/assets/img/product/${p?.image}`} height={270} />
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
                          <a href="#">{p.product_name}</a>
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
    </>
  )
}

export default Sanpham