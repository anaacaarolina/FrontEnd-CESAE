import { useEffect, useState } from "react";
import globeImg from "../assets/globe.png";
<img src={globeImg} className="pai_natal" />;
import Places from "../components/Places";

export default function AvailablePlaces() {
  const [AvailablePlaces, setAvailablePlaces] = useState([]);

  //código que consulta backend
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setAvailablePlaces(resData.places);
      });
  });

  return (
    <>
      <div>
        <img src={globeImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>Create your personal collection of places you would like to visit or you have visited.</p>
      </div>
      <main>
        <Places title="Available Places" fallbackText="No Places Available" places={AvailablePlaces} />
      </main>
    </>
  );
}

// onSelectPlace={handleSelectPlace}
