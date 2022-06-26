import React from "react";
import { Link } from "react-router-dom";

function BlogPage(){
    return(
        <React.Fragment>
             <button class="scroll-top scroll-to-target" data-target="html">
            <i class="fas fa-angle-up"></i>
        </button>

        <header>
            <div id="sticky-header" class="menu-area transparent-header">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-12">
                            <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                            <div class="menu-wrap">
                                <nav class="menu-nav show">
                                    <div class="logo">
                                        <Link to="/">
                                            <img src="assets/img/logo/logo.png" alt="Logo" />
                                        </Link>
                                    </div>
                                    <div class="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul class="navigation">
                                            <li class="/"><Link to="/">Home</Link> </li>
                                            <li class="/movies"><Link to="/movies">Movie</Link> </li>
                                            <li class="/blog"><Link to="#">blog</Link></li>
                                            <li><Link to="/contact">contacts</Link></li>
                                        </ul>
                                    </div>
                                    <div class="header-action d-none d-md-block">
                                        <ul>
                                            <li class="header-search"><Link to="#" data-toggle="modal" data-target="#search-modal"><i class="fas fa-search"></i></Link></li>
                                            <li class="header-lang">
                                                <form action="#">
                                                    <div class="icon"><i class="flaticon-globe"></i></div>
                                                    <select id="lang-dropdown">
                                                        <option value="">En</option>
                                                        <option value="">Au</option>
                                                        <option value="">AR</option>
                                                        <option value="">TU</option>
                                                    </select>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            <div class="mobile-menu">
                                <div class="close-btn"><i class="fas fa-times"></i></div>

                                <nav class="menu-box">
                                    <div class="nav-logo"><Link to="index.html"><img src="assets/img/logo/logo.png" alt="" title="" /></Link>
                                    </div>
                                    <div class="menu-outer">
                                    </div>
                                    <div class="social-links">
                                        <ul class="clearfix">
                                            <li><Link to="#"><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to="#"><span class="fab fa-facebook-square"></span></Link></li>
                                            <li><Link to="#"><span class="fab fa-pinterest-p"></span></Link></li>
                                            <li><Link to="#"><span class="fab fa-instagram"></span></Link></li>
                                            <li><Link to="#"><span class="fab fa-youtube"></span></Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="menu-backdrop"></div>

                            <div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <form>
                                            <input type="text" placeholder="Search here..." />
                                            <button><i class="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main>

            <section class="breadcrumb-area breadcrumb-bg" style={{backgroundImage: "url(assets/img/bg/breadcrumb_bg.jpg"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content">
                                <h2 class="title">News Update</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Blog Page</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blog-area blog-bg" style={{backgroundImage: "url(assets/img/bg/blog_bg.jpg"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="blog-post-item">
                                <div class="blog-post-thumb">
                                    <Link to="blog-details.html"><img src="assets/img/blog/blog_thumb01.jpg" alt=""  /></Link>
                                </div>
                                <div class="blog-post-content">
                                    <span class="date"><i class="far fa-clock"></i> 10 Mar 2021</span>
                                    <h2 class="title"><Link to="blog-details.html">Your Free Movie Streaming Purposes</Link></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                                        labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa
                                        commodo consequat. Duis aute
                                        irure dolor in reprehend .</p>
                                    <div class="blog-post-meta">
                                        <ul>
                                            <li><i class="far fa-user"></i> by <Link to="#">Admin</Link></li>
                                            <li><i class="far fa-thumbs-up"></i> 63</li>
                                            <li><i class="far fa-comments"></i><Link to="#">12 Comments</Link></li>
                                        </ul>
                                        <div class="read-more">
                                            <Link to="blog-details.html">Read More <i class="fas fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-post-item">
                                <div class="blog-post-thumb">
                                    <Link to="blog-details.html"><img src="assets/img/blog/blog_thumb02.jpg" alt="" /></Link>
                                </div>
                                <div class="blog-post-content">
                                    <span class="date"><i class="far fa-clock"></i> 10 Mar 2021</span>
                                    <h2 class="title"><Link to="blog-details.html">Where watch English movies free?</Link></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                                        labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa
                                        commodo consequat. Duis aute
                                        irure dolor in reprehend .</p>
                                    <div class="blog-post-meta">
                                        <ul>
                                            <li><i class="far fa-user"></i> by <Link to="#">Admin</Link></li>
                                            <li><i class="far fa-thumbs-up"></i> 63</li>
                                            <li><i class="far fa-comments"></i><Link to="#">12 Comments</Link></li>
                                        </ul>
                                        <div class="read-more">
                                            <Link to="blog-details.html">Read More <i class="fas fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-post-item">
                                <div class="blog-post-thumb">
                                    <Link to="blog-details.html"><img src="assets/img/blog/blog_thumb03.jpg" alt="" /></Link>
                                </div>
                                <div class="blog-post-content">
                                    <span class="date"><i class="far fa-clock"></i> 10 Mar 2021</span>
                                    <h2 class="title"><Link to="blog-details.html">House movie to is streaming website?</Link></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                                        labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa
                                        commodo consequat. Duis aute
                                        irure dolor in reprehend .</p>
                                    <div class="blog-post-meta">
                                        <ul>
                                            <li><i class="far fa-user"></i> by <Link to="#">Admin</Link></li>
                                            <li><i class="far fa-thumbs-up"></i> 63</li>
                                            <li><i class="far fa-comments"></i><Link to="#">12 Comments</Link></li>
                                        </ul>
                                        <div class="read-more">
                                            <Link to="blog-details.html">Read More <i class="fas fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pagination-wrap mt-60">
                                <nav>
                                    <ul>
                                        <li class="active"><Link to="#">1</Link></li>
                                        <li><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#">4</Link></li>
                                        <li><Link to="#">Next</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <aside class="blog-sidebar">
                                <div class="widget blog-widget">
                                    <div class="widget-title mb-30">
                                        <h5 class="title">Search Objects</h5>
                                    </div>
                                    <form action="#" class="sidebar-search">
                                        <input type="text" placeholder="Search..." />
                                        <button><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                                <div class="widget blog-widget">
                                    <div class="widget-title mb-30">
                                        <h5 class="title">Categories</h5>
                                    </div>
                                    <div class="sidebar-cat">
                                        <ul>
                                            <li><Link to="#">Movies</Link> <span>12</span></li>
                                            <li><Link to="#">Action Movies</Link> <span>10</span></li>
                                            <li><Link to="#">Streaming</Link> <span>9</span></li>
                                            <li><Link to="#">Download</Link> <span>16</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget blog-widget">
                                    <div class="widget-title mb-30">
                                        <h5 class="title">Recent Posts</h5>
                                    </div>
                                    <div class="rc-post">
                                        <ul>
                                            <li class="rc-post-item">
                                                <div class="thumb">
                                                    <Link to="blog-details.html"><img src="assets/img/blog/rc_post_thumb01.jpg" alt="" /></Link>
                                                </div>
                                                <div class="content">
                                                    <h5 class="title"><Link to="blog-details.html">Express Management Effective</Link></h5>
                                                    <span class="date"><i class="far fa-clock"></i> 10 Mar 2021</span>
                                                </div>
                                            </li>
                                            <li class="rc-post-item">
                                                <div class="thumb">
                                                    <Link to="blog-details.html"><img src="assets/img/blog/rc_post_thumb02.jpg" alt="" /></Link>
                                                </div>
                                                <div class="content">
                                                    <h5 class="title"><Link to="blog-details.html">Where watch English movies free?</Link></h5>
                                                    <span class="date"><i class="far fa-clock"></i> 10 Mar 2021</span>
                                                </div>
                                            </li>
                                            <li class="rc-post-item">
                                                <div class="thumb">
                                                    <Link to="blog-details.html"><img src="assets/img/blog/rc_post_thumb03.jpg" alt="" /></Link>
                                                </div>
                                                <div class="content">
                                                    <h5 class="title"><Link to="blog-details.html">House movie streaming website</Link></h5>
                                                    <span class="date"><i class="far fa-clock"></i> 10 Mar 2021</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget blog-widget">
                                    <div class="widget-title mb-30">
                                        <h5 class="title">Tag Post</h5>
                                    </div>
                                    <div class="tag-list">
                                        <ul>
                                            <li><Link to="#">Movies</Link></li>
                                            <li><Link to="#">Creative</Link></li>
                                            <li><Link to="#">News</Link></li>
                                            <li><Link to="#">Romantic</Link></li>
                                            <li><Link to="#">Who</Link></li>
                                            <li><Link to="#">English</Link></li>
                                            <li><Link to="#">Blending</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <footer>
            <div class="footer-top-wrap">
                <div class="container">
                    <div class="footer-menu-wrap">
                        <div class="row align-items-center">
                            <div class="col-lg-3">
                                <div class="footer-logo">
                                    <Link to="index.html"><img src="assets/img/logo/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="footer-menu">
                                    <nav>
                                        <ul class="navigation">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/movies">Movie</Link></li>
                                            <li><Link to="/tv-shows">tv show</Link></li>
                                        </ul>
                                        <div class="footer-search">
                                            <form action="#">
                                                <input type="text" placeholder="Find Favorite Movie" />
                                                <button><i class="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-quick-link-wrap">
                        <div class="row align-items-center">
                            <div class="col-md-7">
                                <div class="quick-link-list">
                                    <ul>
                                        <li><Link to="#">FAQ</Link></li>
                                        <li><Link to="#">Help Center</Link></li>
                                        <li><Link to="#">Terms of Use</Link></li>
                                        <li><Link to="#">Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="footer-social">
                                    <ul>
                                        <li><Link to="#"><i class="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i class="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i class="fab fa-pinterest-p"></i></Link></li>
                                        <li><Link to="#"><i class="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="copyright-text">
                                <p>Copyright &copy; 2022. All Rights Reserved By <Link to="index.html">MovieTrendz</Link></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="payment-method-img text-center text-md-right">
                                <img src="assets/img/images/card_img.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </React.Fragment>
    );
}

export default BlogPage;