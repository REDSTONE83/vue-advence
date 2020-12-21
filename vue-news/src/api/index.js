import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
async function fetchUser(userName) {
    try {
        const response = await axios.get(`${config.baseUrl}user/${userName}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchItem(itemId) {
    try {
        const response = await axios.get(`${config.baseUrl}item/${itemId}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchList(pageName) {
    try {
        const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchUser,
    fetchItem,
    fetchList,
};