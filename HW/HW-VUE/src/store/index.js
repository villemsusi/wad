import {createStore} from 'vuex'

export default createStore({
    strict: true,
    state: {
        postList: [
            import("../js/posts.json")]
    },
    getters: {
        productListSale: state => {
            return state.productList.map(product => {
                    const temp = structuredClone(product)
                    temp.price = temp.price * 0.5
                    return temp
                }
            )
        }
    },
    mutations: {
        increasePrice: state => {
            state.productList.forEach(p => {
                p.price += 1;
            })

        },
        decreasePrice: state => {
            state.productList.forEach(p => {
                p.price -= 1;
            })
        }
    },