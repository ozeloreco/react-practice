import React, { useState } from "react";
export default function MovieWebsite() {
  const [text, setText] = useState();
  const [movies, setMovies] = useState([]);

  function getMoviesHandler(e) {
    e.preventDefault();
    if (text.length < 3) {
      // Swal.fire('Plese Insert Text');
    }
    fetch("http://www.omdbapi.com/?apikey=28aa4fb3&s=" + text)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((error) => console.log("Error is" + error));
  }

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1 className="js-flix">RECO FLIX</h1>
      <form
        onSubmit={getMoviesHandler}
        style={{ backgroundColor: "white", padding: "20px" }}
      >
        <input
          onChange={(e) => setText(e.target.value)}
          className="js-input-flix"
          placeholder="Search for your favourite Movie"
          type="text"
        />
        <button className="js-button-flix">Search</button>
      </form>
      <div className="bg-dark"></div>

      <div>
        <h3 className="m-5 text-center">MOVIE GALLERY</h3>
        <section className="d-flex flex-wrap justify-content-center px-1">
          {movies.map((x) => {
            return (
              <div key={x.imdbID} className="card" style={{ width: "18rem" }}>
                <img src={x.Poster} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{x.Title}</h5>

                  <p className="card-text">
                    {x.Year} {x.Type}
                  </p>
                  <a href="#" className="btn btn-danger w-100">
                    see details
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
