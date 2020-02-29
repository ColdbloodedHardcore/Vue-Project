import Axios from 'axios'

const state = {
    products: [ 
        {   
            id: 1,
            image: require ('../../assets/images/cart/cart_1.jpg'),
            name: 'Smart Phone Deluxe Edition',
            edit: 'Edit Product',
            price: 790,
            quantity: 0,
        },
        {   
            id: 2,
            image: require ('../../assets/images/products/product_2.jpg'),
            name: 'Speakers',
            edit: 'Edit Product',
            price: 520 ,
            quantity: 0,
        },
        {   
            id: 3,
            image: require ('../../assets/images/products/product_3.jpg'),
            name: 'Accessories',
            edit: 'Edit Product',
            price: 710,
            quantity: 0,
        }                   
    ],
    singleQuantity: 0,
    total: 0
}

const getters = {
    products : state => state.products,  
    singleQuantity : state => state.singleQuantity,
    prodPrice: state => state.products.filter(products => products.price), 
    total : state => state.total,
}

const mutations = {
    set_products : (state, payload) => {
        state.products = payload
    },
    set_quantity : (state, payload) => {
        state.quantity = payload
    },
    set_total : (state, payload) => {
        state.total = payload
    },

    // Single page Qty
    incrementQty: state => state.singleQuantity++,
    decrementQty: state => state.singleQuantity--,

    // Total 
    // incrementTotal: state => state.total = ,
    // decrementTotal: state => state.total = ,

    
}

const actions = {
    set_products : (context, payload) => {
        context.commit("SET_PRODUCTS", payload);
    },
    set_quantity : (context, payload) => {
        context.commit("SET_QUANTITY", payload);
    },
    set_total : (context, payload) => {
        context.commit("SET_TOTAL", payload);
    },
}

export default {
    state, getters, mutations, actions
}