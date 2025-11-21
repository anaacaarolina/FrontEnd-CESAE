import { useEffect, useState } from "react";

export default function StarWarsPeople() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setPeople(resData.results);
      });
  });

  return (
    <>
      <div>
        <h3>Aqui estão as personagens do Star Wars</h3>
      </div>
      {(!people || people.length === 0) && <p className="fallback-text">Não há personagens disponíveis</p>}
      {(people && people.length) > 0 && (
        <ul className="places">
          {people.map((item) => (
            <li key={item.name} className="place-item">
              <p>
                <b>{item.name}: </b>
                {item.birth_year}, {item.gender}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
