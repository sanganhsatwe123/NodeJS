import React from 'react'
import Logo9 from '../assets/img/blog/abc.jpg'
import Logo10 from '../assets/img/blog/def.jpg'
import Logo11 from '../assets/img/blog/jkl.jpg'

function Tintuc() {
    return (
        <>
            <section class="from-blog spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title from-blog__title">
                                <h2>Tất Cả Tin Tức</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic">
                                    <img src={Logo9} alt="" />
                                </div>
                                <div class="blog__item__text">
                                    <ul>
                                        <li><i class="fa fa-calendar-o"></i> Thg 04/2023</li>
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
                                    <img src={Logo10} alt="" />
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
                                    <img src={Logo11} alt="" />
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

export default Tintuc