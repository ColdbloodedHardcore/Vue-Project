import Axios from 'axios'

const state = {
    icons: [
        {
        src: require ('../../assets/images/icons/icon_1.svg'),
        title: 'Free Shipping Worldwide',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.'
        },
        {
        src: require ('../../assets/images/icons/icon_2.svg'),
        title: 'Free Returns',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.'
        },
        {
        src: require ('../../assets/images/icons/icon_3.svg'),
        title: '24h Fast Support',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie.'
        }
      
    ]
}

const getters = {
    icons : state => state.icons    
}

const mutations = {
    set_icons : (state, payload) => {
        state.icons = payload
    },
}

const actions = {
    set_icons : (context, payload) => {
        context.commit("SET_ICONS", payload);
    },
}

export default {
    state, getters, mutations, actions
}