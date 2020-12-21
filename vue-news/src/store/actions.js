import { fetchUser, fetchItem, fetchList } from '../api';

const fetchData = async (fetchApi, commitName, { commit }) => {
    try {
        const { data } = await fetchApi();
        commit(commitName, data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default {
    FETCH_USER(context, userName) {
        return fetchData(() => fetchUser(userName), 'SET_USER', context);
    },
    FETCH_ITEM(context, itemId) {
        return fetchData(() => fetchItem(itemId), 'SET_ITEM', context);
    },
    FETCH_LIST(context, pageName) {
        return fetchData(() => fetchList(pageName), 'SET_LIST', context);
    },
}