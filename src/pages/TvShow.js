import React from "react";
import { Link } from "react-router-dom";

function TvShowPage(){
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
                                        <p>MovieTrendz</p>
                                    </div>
                                    <div class="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul class="navigation">
                                            <li class="menu-item-has-children"><Link to ="/">Home</Link></li>
                                            <li class="active menu-item-has-children"><Link to ="/movies">Movies</Link></li>
                                            <li class="menu-item-has-children"><Link to ="/blog">blog</Link></li>
                                            <li><Link to ="/contact">contacts</Link></li>
                                        </ul>
                                    </div>
                                    <div class="header-action d-none d-md-block">
                                        <ul>
                                            <li class="header-search"><Link to ="#" data-toggle="modal" data-target="#search-modal"><i class="fas fa-search"></i></Link></li>
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
                                    <div class="nav-logo"><Link to ="index.html"><img src="assets/img/logo/logo.png" alt="" title="" /></Link>
                                    </div>
                                    <div class="menu-outer">

                                    </div>
                                    <div class="social-links">
                                        <ul class="clearfix">
                                            <li><Link to ="#"><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to ="#"><span class="fab fa-facebook-square"></span></Link></li>
                                            <li><Link to ="#"><span class="fab fa-pinterest-p"></span></Link></li>
                                            <li><Link to ="#"><span class="fab fa-instagram"></span></Link></li>
                                            <li><Link to ="#"><span class="fab fa-youtube"></span></Link></li>
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
                                <h2 class="title">TV  <span>SHOWS</span></h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to ="index.html">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Tv Shows</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="movie-area movie-bg" style={{backgroundImage: "url(assets/img/bg/movie_bg.jpg"}}>
                <div class="container">
                    <div class="row align-items-end mb-60">
                        <div class="col-lg-6">
                            <div class="section-title text-center text-lg-left">
                                <span class="sub-title">ONLINE STREAMING</span>
                                <h2 class="title">New Release Movies</h2>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="movie-page-meta">
                                <div class="tr-movie-menu-active text-center">
                                    <button class="active" data-filter="*">Animation</button>
                                    <button class="" data-filter=".cat-one">Movies</button>
                                    <button class="" data-filter=".cat-two">Romantic</button>
                                </div>
                                <form action="#" class="movie-filter-form">
                                    <select class="custom-select">
                                        <option selected>English</option>
                                        <option value="1">Blueray</option>
                                        <option value="2">4k Movie</option>
                                        <option value="3">Hd Movie</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row tr-movie-active">
                        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                            <div class="movie-item movie-item-three mb-50">
                                <div class="movie-poster">
                                    <img src="assets/img/poster/ucm_poster01.jpg" alt="" />
                                    <ul class="overlay-btn">
                                        <li class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li><Link to ="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="movie-details.html" class="btn">Details</Link></li>
                                    </ul>
                                </div>
                                <div class="movie-content">
                                    <div class="top">
                                        <h5 class="title"><Link to ="movie-details.html">Women's Day</Link></h5>
                                        <span class="date">2021</span>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li><span class="quality">hd</span></li>
                                            <li>
                                                <span class="duration"><i class="far fa-clock"></i> 128 min</span>
                                                <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                            <div class="movie-item movie-item-three mb-50">
                                <div class="movie-poster">
                                    <img src="assets/img/poster/ucm_poster02.jpg" alt="" />
                                    <ul class="overlay-btn">
                                        <li class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li><Link to ="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="movie-details.html" class="btn">Details</Link></li>
                                    </ul>
                                </div>
                                <div class="movie-content">
                                    <div class="top">
                                        <h5 class="title"><Link to ="movie-details.html">The Perfect Match</Link></h5>
                                        <span class="date">2021</span>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li><span class="quality">4k</span></li>
                                            <li>
                                                <span class="duration"><i class="far fa-clock"></i> 128 min</span>
                                                <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                            <div class="movie-item movie-item-three mb-50">
                                <div class="movie-poster">
                                    <img src="assets/img/poster/ucm_poster03.jpg" alt="" />
                                    <ul class="overlay-btn">
                                        <li class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li><Link to ="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="movie-details.html" class="btn">Details</Link></li>
                                    </ul>
                                </div>
                                <div class="movie-content">
                                    <div class="top">
                                        <h5 class="title"><Link to ="movie-details.html">The Dog Woof</Link></h5>
                                        <span class="date">2021</span>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li><span class="quality">hd</span></li>
                                            <li>
                                                <span class="duration"><i class="far fa-clock"></i> 128 min</span>
                                                <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                            <div class="movie-item movie-item-three mb-50">
                                <div class="movie-poster">
                                    <img src="assets/img/poster/ucm_poster04.jpg" alt="" />
                                    <ul class="overlay-btn">
                                        <li class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li><Link to ="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="movie-details.html" class="btn">Details</Link></li>
                                    </ul>
                                </div>
                                <div class="movie-content">
                                    <div class="top">
                                        <h5 class="title"><Link to ="movie-details.html">The Easy Reach</Link></h5>
                                        <span class="date">2021</span>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li><span class="quality">hd</span></li>
                                            <li>
                                                <span class="duration"><i class="far fa-clock"></i> 128 min</span>
                                                <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                            <div class="movie-item movie-item-three mb-50">
                                <div class="movie-poster">
                                    <img src="assets/img/poster/ucm_poster05.jpg" alt="" />
                                    <ul class="overlay-btn">
                                        <li class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li><Link to ="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="movie-details.html" class="btn">Details</Link></li>
                                    </ul>
                                </div>
                                <div class="movie-content">
                                    <div class="top">
                                        <h5 class="title"><Link to ="movie-details.html">The Cooking</Link></h5>
                                        <span class="date">2021</span>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li><span class="quality">hd</span></li>
                                            <li>
                                                <span class="duration"><i class="far fa-clock"></i> 128 min</span>
                                                <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
                            <div class="movie-item movie-item-three mb-50">
                                <div class="movie-poster">
                                    <img src="assets/img/poster/ucm_poster06.jpg" alt="" />
                                    <ul class="overlay-btn">
                                        <li class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li><Link to ="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="movie-details.html" class="btn">Details</Link></li>
                                    </ul>
                                </div>
                                <div class="movie-content">
                                    <div class="top">
                                        <h5 class="title"><Link to ="movie-details.html">The Hikaru Night</Link></h5>
                                        <span class="date">2021</span>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li><span class="quality">hd</span></li>
                                            <li>
                                                <span class="duration"><i class="far fa-clock"></i> 128 min</span>
                                                <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                            <div class="movie-item movie-item-three mb-50">
                                <div class="movie-poster">
                                    <img src="assets/img/poster/ucm_poster07.jpg" alt="" />
                                    <ul class="overlay-btn">
                                        <li class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li><Link to ="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="movie-details.html" class="btn">Details</Link></li>
                                    </ul>
                                </div>
                                <div class="movie-content">
                                    <div class="top">
                                        <h5 class="title"><Link to ="movie-details.html">The Life Quotes</Link></h5>
                                        <span class="date">2021</span>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li><span class="quality">hd</span></li>
                                            <li>
                                                <span class="duration"><i class="far fa-clock"></i> 128 min</span>
                                                <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
                            <div class="movie-item movie-item-three mb-50">
                                <div class="movie-poster">
                                    <img src="assets/img/poster/ucm_poster08.jpg" alt="" />
                                    <ul class="overlay-btn">
                                        <li class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li><Link to ="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="movie-details.html" class="btn">Details</Link></li>
                                    </ul>
                                </div>
                                <div class="movie-content">
                                    <div class="top">
                                        <h5 class="title"><Link to ="movie-details.html">The Beachball</Link></h5>
                                        <span class="date">2021</span>
                                    </div>
                                    <div class="bottom">
                                        <ul>
                                            <li><span class="quality">hd</span></li>
                                            <li>
                                                <span class="duration"><i class="far fa-clock"></i> 128 min</span>
                                                <span class="rating"><i class="fas fa-thumbs-up"></i> 3.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="pagination-wrap mt-30">
                                <nav>
                                    <ul>
                                        <li class="active"><Link to ="#">1</Link></li>
                                        <li><Link to ="#">2</Link></li>
                                        <li><Link to ="#">3</Link></li>
                                        <li><Link to ="#">4</Link></li>
                                        <li><Link to ="#">Next</Link></li>
                                    </ul>
                                </nav>
                            </div>
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
                                    <Link to ="index.html"><img src="assets/img/logo/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="footer-menu">
                                    <nav>
                                        <ul class="navigation">
                                            <li><Link to ="index.html">Home</Link></li>
                                            <li><Link to ="index.html">tv show</Link></li>
                                            <li><Link to ="index.html">blog</Link></li>
                                            <li><Link to ="index.html">contact</Link></li>
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
                                        <li><Link to ="#">FAQ</Link></li>
                                        <li><Link to ="#">Help Center</Link></li>
                                        <li><Link to ="#">Terms of Use</Link></li>
                                        <li><Link to ="#">Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="footer-social">
                                    <ul>
                                        <li><Link to ="#"><i class="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to ="#"><i class="fab fa-twitter"></i></Link></li>
                                        <li><Link to ="#"><i class="fab fa-pinterest-p"></i></Link></li>
                                        <li><Link to ="#"><i class="fab fa-linkedin-in"></i></Link></li>
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
                                <p>Copyright &copy; 2022. All Rights Reserved By <Link to ="index.html">MovieTrendz</Link></p>
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
        </footer>x
        </React.Fragment>
    );
}

export default TvShowPage;