import logo from './logo.svg';
import palavras_markin from './palavras_markin.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        {<Exemplo></Exemplo>/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Olá, mundo!</code> and save to reload.
        </p>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reac
        </a> */}
      </header>
    </div>
  );
}

function Exemplo() {
  return <div>
    <img src={palavras_markin} className='Exemplo-palavras_markin' alt=""/>
    <ul className='Exemplo-lista'>
      <li>Inicio</li>
      <li>Sobre</li>
      <li>Contato</li>
    </ul>
  </div>
}

export default App;
