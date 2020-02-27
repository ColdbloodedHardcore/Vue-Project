import _ from 'lodash';
import Axios from 'axios'

const state = {
    posts: [
        {
            src: require ('../../assets/images/products/product_1.jpg'),
            title: 'SmartPhone',            
            price: 670
        },
        {
            src: require ('../../assets/images/products/product_2.jpg'),
            title: 'Speakers',            
            price: 520
        },
        {
            src: require ('../../assets/images/products/product_3.jpg'),
            title: 'Accessories',            
            price: 710
        },
        {
            src: require ('../../assets/images/products/product_4.jpg'),
            title: 'Laptop',            
            price: 330
        },
        {
            src: require ('../../assets/images/products/product_5.jpg'),
            title: 'Headphones',            
            price: 170
        },
        {
            src: require ('../../assets/images/products/product_6.jpg'),
            title: 'Tablet',            
            price: 240
        },
        {
            src: require ('../../assets/images/products/product_7.jpg'),
            title: 'SmartPhone',            
            price: 70
        },
        {
            src: require ('../../assets/images/products/product_8.jpg'),
            title: 'Keyboard',            
            price: 490
        },
        {
            src: require ('../../assets/images/products/product_9.jpg'),
            title: 'Drone',            
            price: 410
        },
        {
            src: require ('../../assets/images/products/product_10.jpg'),
            title: 'Headphones',            
            price: 365
        },
        {
            src: require ('../../assets/images/products/product_11.jpg'),
            title: 'PlayStation',            
            price: 195
        },
        {
            src: require ('../../assets/images/products/product_12.jpg'),
            title: 'Photo Camera',            
            price: 580
        }
    ],
    sortBar: Boolean
}

const getters = {
    posts : state => state.posts,
    sortBar : state => state.sortBar
}

const mutations = {
    set_posts : (state, payload) => {
        state.posts = payload
    },
    set_sortBar : (state, payload) => {
        state.sortBar = payload
    },

}

const actions = {
    set_posts : (context, payload) => {
        context.commit("set_post", payload);
    },
    set_sortBar : (context, payload) => {
        context.commit("set_sortBar", payload);
    },
}

export default {
    state, getters, mutations, actions
}