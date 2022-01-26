import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeFilled } from "@ant-design/icons";
import Search from "./Search";
import MoviesList from "./MoviesList";

function Home() {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div className="App">
      <div className="Navbar">
        <h3 style={{ margin: "10px 20px", color: "#cf3721" }}>Movies</h3>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{
            width: "50%",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#dfdfdf",
            height: "25px",
            marginTop: "10px",
            marginLeft: "20px",
          }}
        />
        <Link to="/" onClick={() => setSearch("")}>
          <HomeFilled style={{ marginTop: "10px", fontSize: "25px" }} />
        </Link>
      </div>
      <hr />
      {search ? <Search searchVal={search} /> : <MoviesList />}
    </div>
  );
}

export default Home;
