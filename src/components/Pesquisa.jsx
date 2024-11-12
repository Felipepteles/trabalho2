import { useForm } from "react-hook-form"
import { useState } from "react"
import { Titulo } from "./Titulo"
import { Produto } from "./Produto"
import './Pesquisa.css';

function Pesquisa() {
  const [produtos, setProdutos] = useState([])
  const { register, handleSubmit } = useForm()

  function pesquisaProdutos(data) {
    if (data.palavra.length < 2) {
      alert("Informe, no mínimo, 2 caracteres para a pesquisa")
      return
    }
    if (localStorage.getItem("produtos")) {
      const produtos2 = JSON.parse(localStorage.getItem("produtos"))
      const produtos3 = produtos2.filter(
        produto =>
          produto.nome.toUpperCase().includes(data.palavra.toUpperCase()))
      setProdutos(produtos3)
    }
  }

  function refresh(){
    window.location.reload();
  }

  const listaProduto = produtos.map(produto => (
    <Produto key={produto.nome} produto={produto} produtos={produtos} setProdutos={setProdutos} />
  ))

  return (
    <>
      <Titulo />
      <main>
        <div className='main'>
          <h2>Pesquisar Produtos</h2>
        </div>
        <form onSubmit={handleSubmit(pesquisaProdutos)}>
          <div className="box__pesquisa">
            <input  type="text" required placeholder="Nome do produto" className="input__busca" {...register("palavra")} />
            <div className="box__botoes">
            <input type="submit" value="Pesquisar" className="botao__input"/>
            <input onClick={refresh} type="reset" value="Limpar" className="botao__input"/>
            </div>
          </div>
        </form>
        <div className='grid__geral'>
          {listaProduto}
        </div>
      </main>
    </>
  )
}

export default Pesquisa