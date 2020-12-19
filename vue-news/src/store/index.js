import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {},
    },
    getters: {
        fetchedNews: state => state.news,
        fetchedAsk: state => state.ask,
        fetchedJobs: state => state.jobs,
        fetchedUser: state => state.user,
        fetchedItem: state => state.item,
    },
    actions,
    mutations,
});