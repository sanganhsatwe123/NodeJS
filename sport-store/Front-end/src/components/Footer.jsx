import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo-team.png';

function Footer() {
    return (
        <>
            <footer class="footer spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer__about">
                                <div class="footer__about__logo">
                                    <Link to='/'><img src={Logo} alt="" width="150" height="70" /></Link>
                                </div>
                                <ul>
                                    <li>Địa chỉ: HUTECH University - E Campus (SHTP), Xa lộ Hà Nội, Phường Hiệp Phú, TP.Thủ Đức, TP.HCM</li>
                                    <li>Số điện thoại: 0912.567.790</li>
                                    <li>Email: hoanglamxh790@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div class="footer__widget">
                                <h6>Liên kết nhanh</h6>
                                <ul>
                                    <li><Link to='/'>Trang chủ</Link></li>
                                    <li><Link to='/san-pham'>Sản phẩm</Link></li>
                                    <li><Link to='/bai-viet'>Tin tức</Link></li>
                                    <li><Link to='/lien-he'>Liên hệ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="footer__widget">
                            <h6>Địa chỉ liên hệ</h6>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4206639910967!2d106.78290865028094!3d10.855574792229877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e7ea103df%3A0xb6cf10bb7d719327!2sHUTECH%20University%20-%20E%20Campus%20(SHTP)!5e0!3m2!1sen!2s!4v1680982342294!5m2!1sen!2s" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer__copyright">
                                <div class="footer__copyright__text"><p>
                                    Nhóm SĐLB | ĐỒ ÁN MÔN HỌC NGÔN NGỮ PHÁT TRIỂN ỨNG DỤNG MỚI <i class="fa fa-heart" aria-hidden="true"></i> 2023
                                </p></div>
                                <div class="footer__copyright__payment"><img src="img/payment-item.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer