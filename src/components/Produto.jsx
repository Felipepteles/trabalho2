import { Like } from './Like'
import './Produto.css'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";


export function Produto({ produto, produtos, setProdutos }) {

  function gostei() {
    const produtos2 = [...produtos]
    const index = produtos2.findIndex(x => x.nome == produto.nome)
    produtos2[index].like++
    setProdutos(produtos2)
    localStorage.setItem("produtos", JSON.stringify(produtos2))
  }


  function naoGostei() {
    const produtos2 = [...produtos]
    const index = produtos2.findIndex(x => x.nome == produto.nome)
    produtos2[index].dislike++
    setProdutos(produtos2)
    localStorage.setItem("produtos", JSON.stringify(produtos2))
  }

  return (
    <>
      <div className='grid__geral'>
        <div className='grid__item'>
          <div className='grid__foto'>
            <img src={produto.foto} alt="" />
          </div>
          <div className='grid__texto'>
            <h3>{produto.nome}</h3>
            <h4>{produto.descricao}</h4>
            <h5>R${produto.preco}</h5>
            <div className='grid__botoes'>
              {produto.like > 0 &&
                <div>
                  <h2 className='like__texto'>{produto.like}</h2>
                </div>
              }
              <button onClick={gostei}><FaRegThumbsUp /></button>
              <button onClick={naoGostei}><FaRegThumbsDown /></button>
              {produto.dislike > 0 &&
                <div>
                  <h2 className='like__texto'>{produto.dislike}</h2>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

    </>

  )
}