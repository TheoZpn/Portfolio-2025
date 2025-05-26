import React from "react";
import fotominha from '../../assets/fotominha.png';
import githubicone from '../../assets/githubicone.png';
import linkedinicone from '../../assets/linkedinicone.png';
import whatsappicone from '../../assets/zapicone.png';
import './sobre.css';

function Sobre() {
  return (
    <section className="sobre-container">
      <h1>Sobre Mim</h1>
      <img src={fotominha} alt="Foto do desenvolvedor" className="foto-perfil" />
      <p>
        Olá, meu nome é Théo e sou Estudante de Engenharia de Software do IFPR de Paranavaí. Neste portfolio você poderá encontrar projetos meus e experiências passadas.
      </p>
      <div className="redes-sociais">
        <a href="https://github.com/TheoZpn" target="_blank" rel="noopener noreferrer">
          <img src={githubicone} alt="GitHub" className="icone" />
        </a>
        <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
          <img src={linkedinicone} alt="LinkedIn" className="icone" />
        </a>
        <a href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer">
          <img src={whatsappicone} alt="WhatsApp" className="icone" />
        </a>
      </div>
    </section>
  );
}

export default Sobre;
