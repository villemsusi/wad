import {createStore} from 'vuex'

export default createStore({
    strict: true,
    state: {
        postList: [
            import("../js/posts.json")]
    },
    getters: {
        productListSale: state => {
            return state.postList.map(post => {
                    const temp = structuredClone(post)
                    //temp.likeAmount = temp.likeAmount
                    return temp
                }
            )
        }
    },
    mutations: {
        increasePrice: state => {
            state.postList.forEach(p => {
                p.ID += 1;
            })
        }
    },
    actions: {
        increasePriceAction: action =>{
            setTimeout(function (){
                action.commit("increasePrice")
            }, 1000)
        }

    }
})