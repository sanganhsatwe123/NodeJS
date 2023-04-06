import React from 'react'
import Navbar from '../components/Navbar'
import Logo1 from '../assets/img/product/nikenam.jpg'
import Logo2 from '../assets/img/product/viettel.jpg'
import Logo3 from '../assets/img/product/Tatay.jpg'
import Logo4 from '../assets/img/product/dt.jpg'
import Logo5 from '../assets/img/product/gangtay.jpg'
import Logo6 from '../assets/img/product/cone.jpg'
import Logo7 from '../assets/img/product/nikenu1.jpg'
import Logo8 from '../assets/img/product/khungthanh.jpg'
import Logo9 from '../assets/img/blog/abc.jpg'
import Logo10 from '../assets/img/blog/def.jpg'
import Logo11 from '../assets/img/blog/jkl.jpg'

function Trangchu() {
  return (
    <>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Các Sản Phẩm Nổi Bật</h2>
              </div>
              <div className="featured__controls">
            
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            <div className="col-lg-3 col-md-4 col-sm-6 mix quanaobongda">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg="img/product/viettel.jpg">
                  <img src={Logo2} />
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Áo Đấu CLB Viettel Mùa Giải Mới</a></h6>
                  <h5>500.000 VNĐ</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix dungcutapluyenthethao">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" >
                  <img src={Logo3} />
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Bộ Tạ Tay Brosman</a></h6>
                  <h5>65.000 VNĐ</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix quanaothethao">
              <div className="featured__item">
                <div className="featured__item__pic set-bg">
                  <img src={Logo4} />
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Áo Thể Thao Adidas</a></h6>
                  <h5>500.000 VNĐ</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix dungcutapluyenbongda">
              <div className="featured__item">
                <div className="featured__item__pic set-bg">
                  <img src={Logo5} />
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Găng Tay Thủ Môn</a></h6>
                  <h5>500.000 VNĐ</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix quanaothethao">
              <div className="featured__item">
                <div className="featured__item__pic set-bg">
                  <img src={Logo1} />
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Áo Khoác Nike Cho Nam</a></h6>
                  <h5>900.000 VNĐ</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix dungcutapluyenthethao">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg="img/product/cone.jpg">
                  <img src={Logo6} />
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Bộ Cone Tập Thể Thao</a></h6>
                  <h5>99.000 VNĐ</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix quanaothethao">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg="img/product/nikenu1.jpg">
                  <img src={Logo7} />
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Áo Khoác Nike Cho Nữ</a></h6>
                  <h5>500.000 VNĐ</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix dungcutapluyenbongda">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg="img/product/khungthanh.jpg">
                  <img src={Logo8} />
                  <ul className="featured__item__pic__hover">
                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><a href="#">Bộ Khung Thành Tập Kỹ Năng Dứt Điểm</a></h6>
                  <h5>1.000.000 VNĐ</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="from-blog spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title from-blog__title">
                <h2>Các Tin Tức Liên Quan</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <img src={Logo9} alt=""/>
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li><i class="fa fa-calendar-o"></i> Thg 04/2023 </li>
                    <li><i class="fa fa-comment-o"></i> 5</li>
                  </ul>
                  <h5><a href="#">6 Môn Thể Thao Tập Luyện Hằng Ngày Giúp Bạn Tăng Tuổi Thọ</a></h5>
                  <p>Đối với con người chúng ta, sức khỏe là vô cùng quan trọng, nhưng làm thế nào để vừa cải thiện sức khỏe, vừa kéo dài tuổi thọ thì...</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <img src={Logo10} alt=""/>
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li><i class="fa fa-calendar-o"></i> Thg 04/2023</li>
                    <li><i class="fa fa-comment-o"></i> 5</li>
                  </ul>
                  <h5><a href="#">9 Phương Pháp Tập Thể Thao Thân Thiện Với Môi Trường</a></h5>
                  <p>Bài viết sau đây sẽ mang đến cho người đọc 9 phương pháp tập thể thao thân thiện với môi trường.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic">
                  <img src={Logo11} alt=""/>
                </div>
                <div class="blog__item__text">
                  <ul>
                    <li><i class="fa fa-calendar-o"></i> Thg 04/2023</li>
                    <li><i class="fa fa-comment-o"></i> 5</li>
                  </ul>
                  <h5><a href="#">6 Bộ Phận Quan Trọng Cấu Tạo Nên Giày Chạy Bộ</a></h5>
                  <p>Có 6 bộ phận cấu tạo nên một đôi giày chạy bộ thoải mái và êm ái, đó là...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Trangchu