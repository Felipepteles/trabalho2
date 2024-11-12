import { useForm } from "react-hook-form";
import './NovoProduto.css'
export function NovoProduto({produtos, setProdutos}){
  const { register, handleSubmit, reset, setFocus } = useForm()

  function incluirProduto(data){
    const novo = {
      nome: data.nome,
      foto: data.foto,
      preco: data.preco,
      descricao: data.descricao,
      like: 0,
      dislike: 0
    }
    const produtos2 = [novo, ...produtos]
    setProdutos(produtos2)
    localStorage.setItem("produtos", JSON.stringify(produtos2))
    limpaForm()
  }

  function limpaForm(){
    setFocus("nome")
    reset
  }
  return(
    <>
    <form onSubmit={handleSubmit(incluirProduto)}>
      <h2>Cadastro de Produto</h2>
      <div className="formulario">
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" required {...register("nome")}/>
      </div>
      <div className="formulario">
        <label htmlFor="foto">Foto: </label>
        <input type="text" id="foto" required {...register("foto")}/>
      </div>
      <div className="formulario">
        <label htmlFor="preco">Preço: </label>
        <input type="text" id="preco" required {...register("preco")}/>
      </div>
      <div className="formulario">
        <label htmlFor="descricao">Descrição: </label>
        <textarea id="descricao" required rows={3} {...register("descricao")}></textarea>
      </div>
      <div className="botao">
        <input type="submit" value="Incluir" />
        <input type="reset" value="Limpar" />
      </div>
    </form>
    </>
  )


}