import { useEffect, useState } from 'react';
import './App.css';
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal';
import { Titulo } from './components/Titulo';
import { Produto } from './components/Produto';
import { NovoProduto } from './components/NovoProduto';


function App() {
  const [produtos, setProdutos] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("produtos")) {
      const produtos2 = JSON.parse(localStorage.getItem("produtos"))
      setProdutos(produtos2)
    }
  },[])

  const listaProduto = produtos.map(produto => (
    <Produto key={produto.nome} produto={produto} produtos={produtos} setProdutos={setProdutos} />
  ))

  function abrirForm() {
    setOpen(true)
  }
  return (
    <>

      <Titulo />
      <main>
        <div className='main'>
          <h2>Cadastro de Produtos</h2>
          <button onClick={abrirForm}>Adicionar</button>
        </div>
        <div className='grid__geral'>
          {listaProduto}
        </div>
      </main>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <NovoProduto produtos={produtos} setProdutos={setProdutos} />
      </Modal>
    </>
  )
}

export default App

