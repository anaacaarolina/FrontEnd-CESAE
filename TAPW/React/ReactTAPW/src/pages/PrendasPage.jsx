import ListaDePrendas from "../components/ListaDePrendas";
import pai_natal from "../assets/pai_natal.png";
<img src={pai_natal} className="pai_natal" />;

export default function PrendasPage() {
  return (
    <>
      <main>
        <h3>Lista de Prendas</h3>
        <img src={pai_natal} className="pai_natal" />
        <ListaDePrendas />
      </main>
    </>
  );
}
