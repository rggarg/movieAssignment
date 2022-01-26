import React, { useEffect, useState } from "react";
import Card from "./Card";

function Search({ searchVal, ...props }) {
  let data = [];
  const [value, setValue] = useState([]);
  console.log("searchVal", searchVal);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=704d4986aa607aa0c472657c2cdcb7c4&language=en-US&page=1&include_adult=false&query=${searchVal}`
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
        //   console.log(data);
        setValue([...data]);
      });
  }, [searchVal]);
  return (
    <div>
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

export default Search;
