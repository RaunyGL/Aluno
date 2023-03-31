import { useState } from "react";
import "./styles.css";

export default function App() {
  const [mensa1, setMensa1] = useState("");
  const [mensa2, setMensa2] = useState("");
  const [aluno, setAluno] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [cor, setCor] = useState("");

  function mostraMediaesituacao(e) {
    e.preventDefault();
    const soma = Number(nota1) + Number(nota2);
    const media = soma / 2;

    setMensa1(`Média das Notas ${media.toFixed(2)}`);

    if (media >= 6) {
      setMensa2(`Parabéns ${aluno} ! Você foi aprovado(a)`);
      setCor("blue");
    } else {
      setMensa2(`Ops ${aluno} ! Você foi reprovado(a)`);
      setCor("red");
    }
  }

  return (
    <div>
      <h1>Programa Situação do Aluno</h1>
      <form onSubmit={mostraMediaesituacao}>
        <p>
          Nome do Aluno:{" "}
          <input
            type="text"
            value={aluno}
            onChange={(e) => setAluno(e.target.value)}
          />
        </p>
        <p>
          1ª Nota:{" "}
          <input
            type="text"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
          />
        </p>
        <p>
          2ª Nota:{" "}
          <input
            type="text"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
          />
        </p>
        <input type="submit" value="Exibir Média e Situação" />
      </form>
      <h3>{mensa1}</h3>
      <h3 style={{ color: cor }}>{mensa2}</h3>
    </div>
  );
}
