import { useState } from "react";
import Botao from "../components/botao";
import listaDePrendas from "../data/listaDePrendas.js";

export default function ListaDePrendas() {
  const [pessoaClicada, setpessoaClicada] = useState("");

  function getMembro(pessoa) {
    setpessoaClicada(pessoa);
  }

  const prendas = listaDePrendas[pessoaClicada];

  return (
    <>
      <div>{pessoaClicada ? "O membro selecionado é " + pessoaClicada : "Selecione um membro da família"}</div>
      <menu>
        <Botao isActive={pessoaClicada == "Carolina"} aoClicar={() => getMembro("Carolina")}>
          Carolina
        </Botao>
        <Botao isActive={pessoaClicada == "Mãe"} aoClicar={() => getMembro("Mãe")}>
          Mãe
        </Botao>
        <Botao isActive={pessoaClicada == "Pai"} aoClicar={() => getMembro("Pai")}>
          Pai
        </Botao>
      </menu>
      <div>
        {pessoaClicada && (
          <div className="lista_prendas">
            {prendas.length > 0 ? (
              <ul>
                {listaDePrendas[pessoaClicada].map((item, index) => (
                  <li key={index}>
                    <b>{item.destinatario}</b> - {item.prenda}: {item.preco} euros
                  </li>
                ))}
              </ul>
            ) : (
              "Ainda não há prendas nesta lista :("
            )}
          </div>
        )}
      </div>
    </>
  );
}
