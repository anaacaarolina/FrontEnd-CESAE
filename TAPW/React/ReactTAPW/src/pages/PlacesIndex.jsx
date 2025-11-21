import { useEffect, useState } from "react";
import globeImg from "../assets/globe.png";
<img src={globeImg} className="pai_natal" />;
import Places from "../components/Places";
import { updateUserPlaces } from "../https";

export default function AvailablePlaces() {
  //houve uma alteração de estado: recebemos dados e vamos mudar o DOM com esses dados
  const [AvailablePlaces, setAvailablePlaces] = useState([]);
  const [UserPlaces, setUserPlaces] = useState([]);

  //código que consulta backend e traz os dados de lugares disponíveis para escolha
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setAvailablePlaces(resData.places);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/user-places")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setUserPlaces(resData.places);
      });
  }, []);

  //função que quando clicamos nos lugares disponíveis toma conta do que vamos fazer com esse lugar
  function handleSelectPlace(selectedPlace) {
    //tomar conta e atualizar visualmente o react
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      !UserPlaces.includes(selectedPlace) && updateUserPlaces([selectedPlace, ...UserPlaces]);
    });

    //enviar o ficheiro para atualizar no backend os lugares escolhidos
    updateUserPlaces([selectedPlace, ...UserPlaces]);
  }

  //função que toma conta de apagar o lugar clicada nos UserPlaces
  function handleRemovePlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedPlace.id));
    updateUserPlaces(UserPlaces.filter((place) => place.id != selectedPlace.id));
  }

  return (
    <>
      <div>
        <img src={globeImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>Create your personal collection of places you would like to visit or you have visited.</p>
        <Places title="User Places" fallbackText="Please selected from below" places={UserPlaces} onSelectPlace={handleRemovePlace} />
      </div>
      <main>
        <Places title="Available Places" fallbackText="No Places Available" places={AvailablePlaces} onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}
