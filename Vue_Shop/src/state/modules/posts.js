import _ from 'lodash';
import Axios from 'axios'

const state = {
    posts: [
        {   
            id: 1,
            src: require ('../../assets/images/products/product_1.jpg'),
            title: 'SmartPhone',            
            price: 670
        },
        {   
            id: 2,
            src: require ('../../assets/images/products/product_2.jpg'),
            title: 'Speakers',            
            price: 520
        },
        {   
            id: 3,
            src: require ('../../assets/images/products/product_3.jpg'),
            title: 'Accessories',            
            price: 710
        },
        {   
            id: 4,
            src: require ('../../assets/images/products/product_4.jpg'),
            title: 'Laptop',            
            price: 330
        },
        {   
            id: 5,
            src: require ('../../assets/images/products/product_5.jpg'),
            title: 'Headphones',            
            price: 170
        },
        {   
            id: 6,
            src: require ('../../assets/images/products/product_6.jpg'),
            title: 'Tablet',            
            price: 240
        },
        {   
            id: 7,
            src: require ('../../assets/images/products/product_7.jpg'),
            title: 'SmartPhone',            
            price: 70
        },
        {   
            id: 8,
            src: require ('../../assets/images/products/product_8.jpg'),
            title: 'Keyboard',            
            price: 490
        },
        {   
            id: 9,
            src: require ('../../assets/images/products/product_9.jpg'),
            title: 'Drone',            
            price: 410
        },
        {   
            id: 10,
            src: require ('../../assets/images/products/product_10.jpg'),
            title: 'Headphones',            
            price: 365
        },
        {   
            id: 11,
            src: require ('../../assets/images/products/product_11.jpg'),
            title: 'PlayStation',            
            price: 195
        },
        {   
            id: 12,
            src: require ('../../assets/images/products/product_12.jpg'),
            title: 'Photo Camera',            
            price: 580
        }
    ],
    homePosts: [],
    singlePosts: []
}

const getters = {
    posts : state => state.posts,
    homePosts: state => state.Posts = state.posts.slice(0, 8),
    singlePosts: state => state.singlePosts = state.posts.sort((a, b) => Math.random() - 0.5).slice(0, 4),
}

const mutations = {
    set_posts : (state, payload) => {
        state.posts = payload
    }
}

const actions = {
    set_posts : (context, payload) => {
        context.commit("set_post", payload);
    }
}

export default {
    state, getters, mutations, actions
}