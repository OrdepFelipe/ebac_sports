import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'
import { useGetProductsQuery } from '../service/api'

type Props = {
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ favoritos, favoritar }: Props) => {
  const { data: produtos, error, isLoading } = useGetProductsQuery()

  function produtoEstaNosFavoritos(produto: ProdutoType) {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao buscar produtos.</div>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          favoritar={favoritar}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
