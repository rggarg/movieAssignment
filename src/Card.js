import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Card({ id, title, poster, description, rating, ...props }) {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt="movie_poster"
        className="cardImage"
      />
      <div className="cardText">
        <h4 style={{ margin: "7px" }}>{title.slice(0, 15)}...</h4>
        <ReactStars
          count={5}
          value={rating / 2}
          size={20}
          edit={false}
          isHalf={true}
          activeColor="#fbbc04"
        />
      </div>
      <p>{description.slice(0, 55)}...</p>
      <button style={{ marginBottom: "7px", padding: "3px" }}>
        <Link style={{ textDecoration: "none" }} to={`/movie/${id}`}>
          Show More
        </Link>
      </button>
    </div>
  );
}

export default Card;
