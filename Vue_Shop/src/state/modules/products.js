import Axios from 'axios'

const state = {
    products: [ 
        {
          image: require ('../../assets/images/cart/cart_1.jpg'),
          name: 'Smart Phone Deluxe Edition',
          edit: 'Edit Product',
          price: 790.9 + '0'
        }                  
    ]  
}

const getters = {
    products : state => state.products    
}

const mutations = {
    set_products : (state, payload) => {
        state.products = payload
    },
}

const actions = {
    set_products : (context, payload) => {
        context.commit("SET_PRODUCTS", payload);
    },
}

export default {
    state, getters, mutations, actions
}