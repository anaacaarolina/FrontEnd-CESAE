import { Link } from "react-router-dom";
import ComponentsCard from "../components/ComponentsCard";
import { CORE_CONCEPTS } from "../data/coreConcepts";

export default function Courses() {
  //Vai à base de dados, tabela cursos e traz todos os cursos inscritos na base de dados numa forma de array: cursos=[]
  return (
    <>
      <h4>Aqui estão os cursos do CESAE</h4>
      {/* ciclo for que itera o array de cursos e para cada um mostra nome do curso, duração, regime e link para abrir uma nova página com toda a informação do curso */}

      <Link to="/curso/react">React</Link>
      <br />
      <Link to="/curso/lavarel">Laravel</Link>
      <br />
      <Link to="/curso/javascript">Javascript</Link>

      {/* <Link to="/curso/"+{var_titlte}>Curso</Link> */}

      <div>
        {CORE_CONCEPTS.map((item) => (
          <ComponentsCard key={item.title} {...item} />
        ))}
      </div>
    </>
  );
}
