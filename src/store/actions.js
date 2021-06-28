import { ADD_COUNT, ADD_TO_CART } from './mutations-types'
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let Oldproduct = context.state.carList.find(item => item.iid === payload.iid)
            if (Oldproduct) {
                context.commit(ADD_COUNT, Oldproduct)
                resolve('当前的商品数量+1')
            } else {

                context.commit(ADD_TO_CART, payload)
                resolve('添加到购物车成功')

            }
        })


    }
}