import { ADD_COUNT, ADD_TO_CART } from './mutations-types'
export default {
    //尽量一个方法一件事，否则vue工具不好跟踪变化，这里+1和push是两件事
    [ADD_COUNT](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.count = 1
        payload.checked = true;
        state.carList.push(payload)

    }

}