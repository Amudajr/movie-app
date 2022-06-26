import React from "react";
import { Link } from "react-router-dom";

function ContactPage(){
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
                                        <Link to ="/">
                                            <p>MovieTrendz</p>
                                        </Link>
                                    </div>
                                    <div class="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul class="navigation">
                                            <li class="menu-item-has-children"><Link to ="/">Home</Link></li>
                                            <li class="menu-item-has-children"><Link to ="/movies">Movie</Link></li>
                                            <li class="menu-item-has-children"><Link to ="/blog">blog</Link></li>
                                            <li class="active"><Link to ="/contact">contacts</Link></li>
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
                                    <div class="nav-logo"><Link to ="index.html"><img scr="assets/img/logo/logo.png" alt="" title="" /></Link>
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
                                <h2 class="title">Contact Us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to ="index.html">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-area contact-bg" style={{backgroundImage: "url(assets/img/bg/contact_bg.jpg"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-7">
                            <div class="contact-form-wrap">
                                <div class="widget-title mb-50">
                                    <h5 class="title">Contact Form</h5>
                                </div>
                                <div class="contact-form">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" placeholder="You Name *" />
                                            </div>
                                            <div class="col-md-6">
                                                <input type="email" placeholder="You  Email *" />
                                            </div>
                                        </div>
                                        <input type="text" placeholder="Subject *" />
                                        <textarea name="message" placeholder="Type Your Message..."></textarea>
                                        <button class="btn">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="widget-title mb-50">
                                <h5 class="title">Information</h5>
                            </div>
                            <div class="contact-info-wrap">
                                <p><span>Find solutions :</span> to common problems, or get help from a support agent industry's standard .</p>
                                <div class="contact-info-list">
                                    <ul>
                                        <li>
                                            <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                                            <p><span>Address :</span>Ilorin, Kwara State, Nigeria.</p>
                                        </li>
                                        <li>
                                            <div class="icon"><i class="fas fa-phone-alt"></i></div>
                                            <p><span>Phone :</span> (+234) 9054733100</p>
                                        </li>
                                        <li>
                                            <div class="icon"><i class="fas fa-envelope"></i></div>
                                            <p><span>Email :</span> Classicallow26@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
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
                                    <Link to ="index.html"><img scr="assets/img/logo/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="footer-menu">
                                    <nav>
                                        <ul class="navigation">
                                            <li><Link to ="/">Home</Link></li>
                                            <li><Link to ="/movies">Movie</Link></li>
                                            <li><Link to ="/tv-shows">tv show</Link></li>
                                            <li><Link to ="/blog">blog</Link></li>
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
                                <img scr="assets/img/images/card_img.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </React.Fragment>
    );    
}

export default ContactPage;