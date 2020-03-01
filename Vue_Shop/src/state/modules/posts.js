import _ from 'lodash';
import Axios from 'axios'

const state = {
    items: [
        {   
            id: 1,
            src: require ('../../assets/images/products/product_1.jpg'),
            title: 'SmartPhone',            
            price: 670,
            quantity: 0,
        },
        {   
            id: 2,
            src: require ('../../assets/images/products/product_2.jpg'),
            title: 'Speakers',            
            price: 520,
            quantity: 0,
        },
        {   
            id: 3,
            src: require ('../../assets/images/products/product_3.jpg'),
            title: 'Accessories',            
            price: 710,
            quantity: 0,
        },
        {   
            id: 4,
            src: require ('../../assets/images/products/product_4.jpg'),
            title: 'Laptop',            
            price: 330,
            quantity: 0,
        },
        {   
            id: 5,
            src: require ('../../assets/images/products/product_5.jpg'),
            title: 'Headphones',            
            price: 170,
            quantity: 0,
        },
        {   
            id: 6,
            src: require ('../../assets/images/products/product_6.jpg'),
            title: 'Tablet',            
            price: 240,
            quantity: 0,
        },
        {   
            id: 7,
            src: require ('../../assets/images/products/product_7.jpg'),
            title: 'SmartPhone',            
            price: 70,
            quantity: 0,
        },
        {   
            id: 8,
            src: require ('../../assets/images/products/product_8.jpg'),
            title: 'Keyboard',            
            price: 490,
            quantity: 0,
        },
        {   
            id: 9,
            src: require ('../../assets/images/products/product_9.jpg'),
            title: 'Drone',            
            price: 410,
            quantity: 0,
        },
        {   
            id: 10,
            src: require ('../../assets/images/products/product_10.jpg'),
            title: 'Headphones',            
            price: 365,
            quantity: 0,
        },
        {   
            id: 11,
            src: require ('../../assets/images/products/product_11.jpg'),
            title: 'PlayStation',            
            price: 195,
            quantity: 0,
        },
        {   
            id: 12,
            src: require ('../../assets/images/products/product_12.jpg'),
            title: 'Photo Camera',            
            price: 580,
            quantity: 0,
        }
    ],
    homeItems: [],
    singleItems: [],
}

const getters = {
    items : state => state.items,

    // Home page posts
    homeItems: state => state.homeItems = state.items.slice(0, 8),

    // Single page posts
    singleItems: state => state.singleItems = state.items.sort((a, b) => Math.random() - 0.5).slice(0, 4),

}

const mutations = {
    set_items : (state, payload) => state.items = payload,

    // Sort by id (by default)
    sortById:  state => state.items.sort((a, b) => a.id > b.id ? 1 : -1),

    // Sort by title
    sortByTitle:  state => state.items.sort((a, b) => a.title > b.title ? 1 : -1),

    // Sort by price
    sortByPrice:  state => state.items.sort((a, b) => a.price > b.price ? 1 : -1),    
}

const actions = {
    set_items : (context, payload) => context.commit("set_items", payload)
  
}

export default {
    state, getters, mutations, actions
}

