import React from 'react';
import ifpr from '../../assets/ifpr.jpg';
import sesi from '../../assets/sesi.png';
import './educacao.css';

const Educacao = () => {
  return (
    <>
      <h1>Instituições Passadas</h1>

      <div className="escola">
        <img 
          src={ifpr} 
          alt="Logo do IFPR" 
          className="escola-img"
        />
        <h2>Instituto Federal do Paraná (IFPR)</h2>
        <p>O Instituto Federal do Paraná (IFPR) é uma instituição pública federal de ensino. É voltada à educação superior, básica e profissional, especializada na oferta gratuita de educação profissional e tecnológica nas diferentes modalidades e níveis de ensino.</p>
        <p><strong>Frequentado</strong> de 2022-202?</p>
      </div>

      <div className="escola">
        <img 
          src={sesi} 
          alt="Logo do SESI" 
          className="escola-img"
        />
        <h2>Colégio SESI - Serviço Social da Indústria</h2>
        <p>Rede de educação básica do Serviço Social da Indústria (SESI). Tem como objetivo melhorar a qualidade de vida e o desenvolvimento do trabalhador industrial, da família e da comunidade.</p>
        <p><strong>Frequentado</strong> de 2019-2021</p>
      </div>
    </>
  );
};

export default Educacao;
