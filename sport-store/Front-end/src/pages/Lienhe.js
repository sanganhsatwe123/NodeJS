import React from 'react'

function Lienhe() {
    return (
        <>
            <section class="breadcrumb-section set-bg" data-setbg="assets/img/breadcrumb.jpg">
                <div class="container">
                    <h2>THÔNG TIN LIÊN HỆ</h2>
                </div>
            </section>
            <section class="contact spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_phone"></span>
                                <h4>Điện thoại</h4>
                                <p>(+84) 912 567 790</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_pin_alt"></span>
                                <h4>Địa chỉ</h4>
                                <p>Số 6996 Nguyễn Cư Trinh, Phường Nguyễn Cư Trinh, Quận 1, TP.HCM</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_clock_alt"></span>
                                <h4>Giờ mở cửa</h4>
                                <p>06:00 đến 20:00</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_mail_alt"></span>
                                <h4>Email</h4>
                                <p>hoanglamxh790@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.7730349938524!2d106.65745806727504!3d10.751395283781276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef4250eaaf3%3A0xc38dbb31cefe6ed3!2zMTMgVOG7kW5nIER1eSBUw6JuLCBQaMaw4budbmcgMTQsIFF14bqtbiA1LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1656521257569!5m2!1svi!2s" width="600" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Lienhe