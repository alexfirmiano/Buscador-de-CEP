import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('') //Passando o valor parte este estado - setInput.
  const [cep, setCep] = useState({})

  async function handleSearch() {
    //https://viacep.com.br/ws/
    
    if(input === '') {
      alert("Favor preencher o CEP desejado!")
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");

    }catch {
      alert("CEP inválido!");
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu CEP aqui..."
        value={input}
        onChange={(e) => setInput(e.target.value) } //Pegando o valor que foi digitado - setInput(e.target.value)
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
      
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;
