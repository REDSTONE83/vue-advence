import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchUser(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItem(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
    fetchUser,
    fetchItem,
    fetchList,
};