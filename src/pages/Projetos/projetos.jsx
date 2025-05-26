import React from 'react';
import robocarton from "../../assets/robocarton.webp";
import desinigrafic from "../../assets/desinigrafic.jpg";
import spacuinvada from "../../assets/spacuinvada.jpg";
import './projetos.css';




const Projetos = () => {
  return (
    <div className="projetos-container">
      <h1>Meus Projetos</h1>

      <div className="projeto">
        <img 
          src={spacuinvada} 
          alt="Tela do jogo Space Invaders desenvolvido" 
          className="projeto-img"
        />
        <h2>Desenvolvimento de um Jogo</h2>
        <p>Criação de um jogo no contexto do IFPR, com temática inspirada no clássico Space Invaders.</p>
        <a href="link-do-projeto-1" target="_blank" rel="noopener noreferrer" aria-label="projeto de Jogo Space Invaders">Ver Projeto</a>
      </div>
      
      <div className="projeto">
        <img 
          src={robocarton} 
          alt="Robô LEGO MindStorm desenvolvido no curso de robótica" 
          className="projeto-img"
        />
        <h2>Participação na Robótica</h2>
        <p>Curso de robótica no ensino médio utilizando LEGO MindStorm e programação em blocos, com participação em competições.</p>
        <a href="link-do-projeto-2" target="_blank" rel="noopener noreferrer" aria-label="projeto de Robótica com LEGO MindStorm">Ver Projeto</a>
      </div>

      <div className="projeto">
        <img 
          src={desinigrafic} 
          alt="Exemplo de design gráfico criado durante meu trabalho" 
          className="projeto-img"
        />
        <h2>Experiência em Design Gráfico</h2>
        <p>Um tempo estagiando como Designer Gráfico, criando e imprimindo logos e rótulos para diversas marcas e produtos.</p>
        <a href="link-do-projeto-3" target="_blank" rel="noopener noreferrer" aria-label="projeto de Design Gráfico">Ver Projeto</a>
      </div>
    </div>
  );
};

export default Projetos;
