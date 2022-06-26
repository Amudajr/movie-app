import React from "react";
import { Link } from "react-router-dom";

import "../pages/All.css";

const MovieList = (props) => {
    return(
    <>
        {props.movies.map((movie, index) => (
            <div className="ro">
                <img src={movie.Poster} alt={movie.Title} /> <br /> <br />
                <label>{movie.Title}</label>  <br />
                <p>{movie.Type} {movie.Year}</p> <br /> <br />
                <div className="overlay">
                    <li><Link to ="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video btn">Watch</Link></li> &nbsp; &nbsp;
                    <li><Link to ="movie-details.html" class="btn">Download</Link></li>
                </div>
            </div>
        ))}
    </>
    );
};

export default MovieList;