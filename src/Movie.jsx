import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import {HomeFilled} from "@ant-design/icons";
import ReactStars from "react-rating-stars-component";

function Movie() {
  const { id } = useParams();
  const [data, setData] = useState({});
  let gen=[];
  let lang=[]


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=704d4986aa607aa0c472657c2cdcb7c4&language=en-US`
    )
      .then((res) => res.json())
      .then((d) => {
        d.genres.forEach((genr)=>{gen.push(genr.name,', ')})
        d.spoken_languages.forEach((lan)=>{lang.push(lan.name,', ')})
          setData({
            genres:gen,
            title: d.title,
            description: d.overview,
            poster: d.poster_path,
            release_date: d.release_date,
            length: d.runtime,
            rating:d.vote_average,
            language:lang
          });
      });
  }, [id]);
  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <div>
      <div className="Navbar">
        <h3 style={{ margin: "10px 20px", color: "#cf3721" }}>Movies Details</h3>
        <Link to='/'>
        <HomeFilled style={{ marginTop: "10px", fontSize: "25px" }} /></Link>
      </div>
      <hr style={{ margin: "0", padding: "0" }} />
      <div className="movieDetails">
        <div style={{ width: "30%" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster}`}
            alt="Movie_Poster"
            style={{ height: "300px", width: "100%" }}
          />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <h3>{data.title}</h3>
          <p><span style={{fontWeight:"Bold"}}>Rating:</span> {data.rating}</p>
          <p><span style={{fontWeight:"Bold"}}>Release:</span> {data.release_date}</p>
          <p><span style={{fontWeight:"Bold"}}>Runtime:</span> {data.length}min</p>
          <p><span style={{fontWeight:"Bold"}}>Genres:</span> {data.genres}</p>
          <p><span style={{fontWeight:"Bold"}}>Language:</span> {data.language}</p>
          <p><span style={{fontWeight:"Bold"}}>Description:</span> {data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
