import React from 'react'
import Logo9 from '../assets/img/blog/abc.jpg'
import Logo10 from '../assets/img/blog/def.jpg'
import Logo11 from '../assets/img/blog/jkl.jpg'
import { useEffect, useState } from "react";
import axios from "axios";

function Tintuc() {
    const [blog, setBlog] = useState([]);
    const [id, setId] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("http://localhost:8080/api/blogs");
            console.log(req.data);
            setBlog(req.data);
            return req;
        }
        fetchData();
    }, []);

    return (
        <>
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
                                                    {b.content?.slice(0, 100) + "..."}
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

export default Tintuc