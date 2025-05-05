import React from "react";
import mordecaiou from '../mordecaiou.jpg';
import fotominha from '../fotominha.png';

function Sobre() {
  return (
    <div className="sobre-container">
      <h1>Sobre Mim</h1>
      <div className="foto-e-texto">
        <img src={fotominha} alt="Foto do desenvolvedor" className="foto-perfil" />
        <p>
          Olá, meu nome é Théo e sou Estudante de Engenharia de Software do IFPR de Paranvaí, neste portfolio você poderá encontrar projetos meus e experiências passadas.
        </p>
      </div>
    </div>
  );
}

export default Sobre;
