import { fetchUser, fetchItem, fetchList } from '../api';

const fetchData = (fetchApi, commitName, { commit }) => {
    return fetchApi()
            .then(({ data }) => {
                commit(commitName, data);
                return data;
            })
            .catch(error => console.log(error));
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