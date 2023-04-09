import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/elegant-icons.css';
import '../assets/css/nice-select.css';
import '../assets/css/jquery-ui.min.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/slicknav.min.css';
import '../assets/css/style.css';
import Logo from '../assets/img/hero/bannerweb1.jpg';
import LogoTeam from '../assets/img/logo-team.png';

function Navbar() {
    return (
        <>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope"></i>Cửa Hàng Đồ Thể Thao SĐLB - Uy Tín, Chất Lượng, Tận Tâm Phục Vụ</li>
                                        <li>Miễn Phí Giao Hàng Cho Các Đơn Hàng Từ 500.000 Trở Lên</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                    </div>
                                    <div className="header__top__right__language">
                                        {/* <img src={Logo} alt="" /> */}
                                        <div>Tiếng Việt</div>
                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                            <li><a href="#">Tiếng Việt</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <a href="/dang-nhap"><i className="fa fa-user"></i>Đăng Nhập</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <img src={LogoTeam} alt="" width="150" height="60"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li><Link to='/'>Trang chủ</Link></li>
                                    <li><Link to='/san-pham'>Sản phẩm</Link></li>
                                    <li><Link to='/bai-viet'>Tin tức</Link></li>
                                    <li><Link to='/lien-he'>Liên hệ</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart"></i> </a></li>
                                    <li><a href="#"><i className="fa fa-shopping-bag"></i> </a></li>
                                </ul>
                                <div className="header__cart__price">item: <span>0</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider owl-carousel">
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="assets/img/categories/fic2.png">
                                    <h5><a href="#">Quần Áo Bóng Đá</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="assets/img/categories/sic.jpg">
                                    <h5><a href="#">Quần Áo Thể Thao</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="assets/img/categories/sic3.png">
                                    <h5><a href="#">Dụng Cụ Tập Luyện Bóng Đá</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg="assets/img/categories/fit.jpg">
                                    <h5><a href="#">Dụng Cụ Tập Luyện Thể Thao</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar