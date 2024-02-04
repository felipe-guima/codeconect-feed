
import './style.css';
import { useState } from "react";

export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  console.log(termoPesquisa)

  return (
    <div>
      <input
        className="barra__nav"
        type="search"
        placeholder="Digite o que você procura"
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}
      ></input>
    </div>
  );
}
