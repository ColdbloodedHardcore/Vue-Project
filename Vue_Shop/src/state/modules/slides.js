import Axios from 'axios'

const state = {
    slides: [
        {
            slide_image: require ('../../assets/images/home/home_slider_1.jpg'),
            title: 'A new Online Shop experience.',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.'
        },
        {
            slide_image: require ('../../assets/images/home/home_slider_1.jpg'),
            title: 'A new Online Shop experience.',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.'
        },
        {
            slide_image: require ('../../assets/images/home/home_slider_1.jpg'),
            title: 'A new Online Shop experience.',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.'
        }
    ],
}

const getters = {
    slides : state => state.slides    
}

const mutations = {
    set_slides : (state, payload) => {
        state.slides = payload
    },
}

const actions = {
    set_slides : (context, payload) => {
        context.commit("SET_SLIDES", payload);
    },
}

export default {
    state, getters, mutations, actions
}