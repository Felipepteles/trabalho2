import { Link } from "react-router-dom";
import './Titulo.css';

export function Titulo() {
  return (
    <header>
      <div className='cabecalho'>
        <div className='cabecalho__hero'>
          <img src="./logo.png" alt="logo" />
          <div className='cabecalho__titulo'>
            <h1>Flor do Campo</h1>
            <hr />
            <h2>Produtos de Beleza</h2>
          </div>
        </div>
        <div className="cabecalho__links">
          <p><Link to="/" className="links"><p>Home</p><img src="./home.svg" alt="" /></Link></p>
          <p><Link to="/pesquisa" className="links"><p>Pesquisa</p><img src="./lupa.svg" alt="" /></Link></p>
        </div>
      </div>
    </header>
  )
}

