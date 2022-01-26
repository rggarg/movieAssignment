import { useEffect, useState } from "react";
import Card from "./Card";

function MoviesList() {
  const [value, setValue] = useState([]);
  let data = [];
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=704d4986aa607aa0c472657c2cdcb7c4&append_to_response=videos,images"
    )
      .then((res) => res.json())
      .then((d) => {
        data.push({
          id: d.id,
          title: d.title,
          poster: d.poster_path,
          description: d.overview,
          rating: d.vote_average,
          length: d.runtime,
        });
        setValue([...data]);
      });
    fetch(
      "https://api.themoviedb.org/3/movie/550/similar?api_key=704d4986aa607aa0c472657c2cdcb7c4&language=en-US/"
    )
      .then((res) => res.json())
      .then((d) => {
        d.results.forEach((element) => {
          data.push({
            id: element.id,
            title: element.title,
            poster: element.poster_path,
            description: element.overview,
            rating: element.vote_average,
            length: element.runtime,
          });
          fetch(
            `https://api.themoviedb.org/3/movie/${element.id}/similar?api_key=704d4986aa607aa0c472657c2cdcb7c4&language=en-US/`
          )
            .then((res) => res.json())
            .then((d) => {
              d.results.forEach((element) => {
                data.push({
                  id: element.id,
                  title: element.title,
                  poster: element.poster_path,
                  description: element.overview,
                  rating: element.vote_average,
                  length: element.runtime,
                });
              });
              setValue([...data]);
            });
        });
        setValue([...data]);
      });
  }, []);
  return (
    <div className="App">
      <div className="cardBox">
        {value.map((dat, key) => {
          return (
            <Card
              key={key}
              id={dat.id}
              title={dat.title}
              poster={dat.poster}
              description={dat.description}
              rating={dat.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MoviesList;
