import Card from "../components/Card";
import userData from "../data/userData";

export default function Contactos() {
  return (
    <div>
      <h2>Aqui estão os meus contactos</h2>
      <Card firstName="Carolina" title="aluna" />
      <Card firstName={userData.firstName} lastName={userData.lastName} title={userData.title} />
      <Card {...userData} />
    </div>
  );
}
