import Axios from 'axios'
import Vue from 'vue'

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

const state = {
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
}

const getters = { 
    cart: state => state.cart,
    cartCount: state => state.cartCount,
}

const mutations = {
    set_cart : (state, payload) => {
        state.cart = payload
    },
    set_cartCount : (state, payload) => {
        state.cartCount = payload
    },
    addToCart(state, item) {
        state.cart.push(item);

        let found = state.cart.find(item => item.id === item.id);

        if (found) {
            found.quantity ++;
            found.totalPrice = found.quantity * found.price;
        } else {
            state.cart.push(item);

            Vue.set(item, 'quantity', 1);
            Vue.set(item, 'totalPrice', item.price);
        }
        state.cartCount++;

        this.commit('saveCart');
    },
    removeFromCart(state) {
        state.cart.splice(0, state.cart.length);       

        this.commit('saveCart');
    },
    saveCart(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
        window.localStorage.setItem('cartCount', state.cartCount);
    }    
}

const actions = {
    set_cart : (context, payload) => {
        context.commit("SET_CART", payload);
    },
}

export default {
    state, getters, mutations, actions
}