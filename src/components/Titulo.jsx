import { Link } from "react-router-dom";
import './Titulo.css';

export function Titulo() {
  return (
    <header>
      <div className='cabecalho'>
        <div className='cabecalho__hero'>
          <img src="./logo.png" alt="logo" />
          <div className='cabecalho__titulo'>
            <h1>Produtos de beleza</h1>
          </div>
        </div>
        <div className="cabecalho__links">
          <p><Link to="/" className="links">Home</Link></p>
          <p><Link to="/pesquisa" className="links">Pesquisa</Link></p>
        </div>
      </div>
    </header>
  )
}
