import { useEffect, useState } from "react";

export default function StarWarsFilms() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setFilms(resData.results);
      });
  });

  return (
    <>
      <div>
        <h3>Aqui estão os filmes de StarWars</h3>
      </div>
      {(!films || films.length === 0) && <p className="fallback-text">Não há filmes disponíveis</p>}
      {(films && films.length) > 0 && (
        <ul className="places">
          {films.map((item) => (
            <li key={item.id} className="place-item">
              <p>
                <b>{item.title} </b>
              </p>
              <p>{item.opening_crawl}</p>
              <p> {item.release_date}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
