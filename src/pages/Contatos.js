function Contato() {
    return (
      <div>
        <h1>Quer me mandar uma mensagem?</h1>
        <p>📧 Email: <a href="mailto:20220009978@estudantes.ifpr.edu.br">20220009978@estudantes.ifpr.edu.br</a></p>
  
        <form className="form-contato" onSubmit={(e) => e.preventDefault()}>
          <label>
            Nome:
            <input type="text" name="nome" required />
          </label>
  
          <label>
            E-mail:
            <input type="email" name="email" required />
          </label>
  
          <label>
            Mensagem:
            <textarea name="mensagem" rows="5" required></textarea>
          </label>
  
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  
  export default Contato;
  