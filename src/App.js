import { FiSearch } from 'react-icons/fi'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu CEP aqui..."
        />

        <button className="buttonSearch">
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
