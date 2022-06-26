import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import MovieList from "../components/MovieList";
import SearchBox from "../components/SearchBox";


function HomePage(){

    const [movies, setMovies] = useState([]);
    const [searchValue, setsearchValue] = useState('');
  
        const getMovieRequest = async (searchValue) => {
            const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d03f9066`;
    
            const response = await fetch(url);
            const responseJson = await response.json();
    
            if (responseJson.Search){
                setMovies(responseJson.Search);
            }
    
        }; 
        useEffect(() => {
            getMovieRequest(searchValue);
    }, [searchValue]);


    return(
        <React.Fragment>

        <header className="header-style-two">
            <div id="sticky-header" className="menu-area">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                            <div className="menu-wrap">
                                <nav className="menu-nav show">
                                    <div className="logo">
                                        <Link to ="/index.">
                                            <h1>Movie</h1>
                                            <h2>TRENDZ</h2>
                                        </Link>
                                    </div>
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className="active menu-item-has-children"><Link to ="/">Home</Link></li>
                                            <li className="menu-item-has-children"><Link to ="/movies">Movie</Link></li>
                                            <li className="menu-item-has-children"><Link to ="/blog">blog</Link></li>
                                            <li><Link to ="/contact">contacts</Link></li>
                                        </ul>
                                    </div>
                                    <div className="header-action d-none d-md-block">
                                        <ul>
                                            <li className="d-none d-xl-block">
                                                <div className="footer-search">
                                                    <form action="">
                                                    <SearchBox searchValue = {searchValue} setsearchValue = {setsearchValue} />
                                                    </form>
                                                </div>
                                            </li>
                                            <li className="header-lang">
                                                <form action="">
                                                    <div className="icon"><i className="flaticon-globe"></i></div>
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

                            <div className="mobile-menu">
                                <div className="close-btn"><i className="fas fa-times"></i></div>

                                <nav className="menu-box">
                                    <div className="nav-logo"><Link to ="/index"><img src="assets/img/logo/logo.png" alt="" title="" /></Link>
                                    </div>
                                    <div className="menu-outer">

                                    </div>
                                    <div className="social-links">
                                        <ul className="clearfix">
                                            <li><Link to ="/"><span className="fab fa-twitter"></span></Link></li>
                                            <li><Link to ="/"><span className="fab fa-facebook-square"></span></Link></li>
                                            <li><Link to ="/"><span className="fab fa-pinterest-p"></span></Link></li>
                                            <li><Link to ="/"><span className="fab fa-instagram"></span></Link></li>
                                            <li><Link to ="/"><span className="fab fa-youtube"></span></Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="menu-backdrop"></div>

                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main>

        
        <section class="top-rated-movie tr-movie-bg2" style={{backgroundImage: "url(assets/img/banner/s_slider_bg.jpg)"}}>
                <div class="container">
                    <div class="row align-items-end mb-60">
                        <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                                <h2 class="title">Search Results</h2>
                        </div>
                        <div class="row tr-movie-active">
                        <div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                            <div class="movie-item movie-item-three mb-50">
                                    <div className="ro">
                                    <div className="cont">
                                        <MovieList movies={movies} />   
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="top-rated-movie tr-movie-bg2" style={{backgroundImage: "url(assets/img/bg/tr_movies_bg.jpg)"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title title-style-three text-center mb-70">
                                <span className="sub-title">top rated movies</span>
                                <h2 className="title">Top Online Watchs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row movie-item-row">
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BZDM2YjA2ZjAtMmZmMy00NDhjLWJjYWYtYjc4ZGY0YzUzOTMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
                                     alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to = "/watch" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to = "/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">The Man From Toronto</Link></h5>
                                    <span className="rel">Movie</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 4.0</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
                                     alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to ="/https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">Top Gun</Link></h5>
                                    <span className="rel">Movie</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 3.7</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BYmY4OGVmNTItZDE3Mi00NjY4LWE1NzEtYTc5YjVkYmFhN2U5XkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg" 
                                    alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to ="/https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">Peaky Blinders</Link></h5>
                                    <span className="rel">Movie</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 3.8</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BZTViNTY5YTUtYzczOC00ZDA2LTk0NzItMjkzMDcyNjJkMDJhXkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_SX300.jpg"
                                     alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to ="/https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">Beast</Link></h5>
                                    <span className="rel">Movie</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 3.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BNDExZjFiYjItMmM3OS00OGUxLTliMTctMzFhZDkzMmFhMzY1XkEyXkFqcGdeQXVyMTA1NTAyMjAw._V1_SX300.jpg"
                                     alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to ="/https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">Saaho</Link></h5>
                                    <span className="rel">Movie</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 3.6</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BYTg2Zjk0ZTctM2ZmMi00MDRmLWJjOGYtNWM0YjBmZTBjMjRkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg"
                                     alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to ="/https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">Light Year</Link></h5>
                                    <span className="rel">Animation</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 3.8</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BNGUyZmY2NDgtYTZhMy00N2FlLTlmM2YtYWYyMjE3NDQwNmFmXkEyXkFqcGdeQXVyMTIzOTU1OTY@._V1_SX300.jpg" alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to ="/https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">Blood Sisters</Link></h5>
                                    <span className="rel">Movie</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 3.2</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BYjdhYTE3NjMtZjI3OC00NzVlLWFiNTUtNzQ3NDNiNTI3NDg4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
                                     alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to ="/https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">Hustle</Link></h5>
                                    <span className="rel">Movie</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 3.8</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BNDgwNGFmMDMtNGQzMC00Mjc2LWFhNzItYWIxMGJlM2Q2MzZlXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_SX300.jpg"
                                     alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to ="/https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">The Innocents</Link></h5>
                                    <span className="rel">Movie</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 3.2</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom-col-">
                            <div className="movie-item movie-item-two">
                                <div className="movie-poster">
                                    <img src="https://m.media-amazon.com/images/M/MV5BZTI4YzljMTMtNDNkOS00ZWU4LTgxMTgtNGM2NTQ0ODMyZDhjXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_SX300.jpg"
                                     alt="" />
                                    <ul className="overlay-btn">
                                        <li><Link to ="/https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</Link></li>
                                        <li><Link to ="/movie-details" className="btn">Download</Link></li>
                                    </ul>
                                </div>
                                <div className="movie-content">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h5 className="title"><Link to ="/movie-details">Official Competition</Link></h5>
                                    <span className="rel">Movie</span>
                                    <div className="movie-content-bottom">
                                        <ul>
                                            <li>
                                                <span className="like"><i className="fas fa-thumbs-up"></i> 2.9 </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>

        <footer>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2022. All Rights Reserved By <Link to ="/index">MovieTrendz</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </React.Fragment>
    );

}

export default HomePage;