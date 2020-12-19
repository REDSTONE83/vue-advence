import { fetchNewsList, fetchJobsList, fetchAskList, fetchUser, fetchItem } from '../api';

const fetchData = (fetchApi, commitName, { commit }) => {
    fetchApi()
        .then(({ data }) => {
            commit(commitName, data);
        })
        .catch(error => console.log(error));
}

export default {
    FETCH_NEWS(context) {
        fetchData(() => fetchNewsList(), 'SET_NEWS', context);
    },
    FETCH_ASK(context) {
        fetchData(() => fetchAskList(), 'SET_ASK', context);
    },
    FETCH_JOBS(context) {
        fetchData(() => fetchJobsList(), 'SET_JOBS', context);
    },
    FETCH_USER(context, userName) {
        fetchData(() => fetchUser(userName), 'SET_USER', context);
    },
    FETCH_ITEM(context, itemId) {
        fetchData(() => fetchItem(itemId), 'SET_ITEM', context);
    },
}