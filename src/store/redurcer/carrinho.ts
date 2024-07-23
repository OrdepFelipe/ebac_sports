import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoCarrinho = action.payload

      if (state.itens.find((prod) => prod.id === produtoCarrinho.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produtoCarrinho)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
