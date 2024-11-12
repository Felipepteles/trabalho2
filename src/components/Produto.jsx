import './Produto.css'

export function Produto({ produto, produtos, setProduto }) {

  function avaliaProduto() {
    const nota = Number(prompt(`Nota para o Produto ${produto.nome}`))
    if (nota < 1 || nota > 5 || isNaN(nota)) {
      alert("Informe uma nota de 1 a 5")
      return
    }
    const produtos2 = [...produtos]
    const index = produtos2.findIndex(x => x.nome == produto.nome)
    produtos2[index].nota = nota
    setProduto(produtos2)
    localStorage.setItem("produtos", JSON.stringify(produtos2))
    alert("Ok! Produto Avaliado")
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
            <button onClick={avaliaProduto}>Avaliar</button>
          </div>
        </div>
      </div>

    </>

  )
}