import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {

  const [input, setInput] = useState('')

  function handleSearch() {
    alert("VALOR DO INPUT " + input)
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu CEP aqui..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 25935-087</h2>

        <span>Rua Testando informações</span>
        <span>Complemento: info qualquer</span>
        <span>Centro</span>
        <span>Rio de Janeiro - RJ</span>
      </main>

    </div>
  );
}

export default App;
