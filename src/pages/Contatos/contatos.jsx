import './contatos.css';



function Contato() {
  return (
    <form className="form-contato" onSubmit={(e) => e.preventDefault()}>
      <h1>Quer me mandar uma mensagem?</h1>
      <p>📧 Email: 20220009978@estudantes.ifpr.edu.br</p>

      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required placeholder="Digite seu nome" />

      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" name="email" required placeholder="Digite seu e-mail" />

      <label htmlFor="mensagem">Mensagem:</label>
      <textarea id="mensagem" name="mensagem" rows="5" required placeholder="Digite sua mensagem"></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contato;
