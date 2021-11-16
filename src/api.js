import axios from "axios";

axios.defaults.timeout = 5000

function getDrugs(cur, limit, params) {
    return axios.get('http://47.111.186.107:9000/ruangong/drug/data/obscure/' + (cur ? cur : 1) + '/' + limit, {params: params})
}

function getDetailByID(id) {
    return axios.get('http://47.111.186.107:9000/ruangong/drug/' + id)
}

function getListByName(params) {
    return axios.get('http://47.111.186.107:9000/ruangong/medicine/data/title', {
        params: params
    })
}

function getExample() {
    return axios.get('/data.json')
}

function getHtml(url, params) {
    return axios.get(url, params)
}

function getReadMe() {
    return axios.get('https://api.github.com/repos/Jimase/Software_Engineering_Team_10/readme', {
        headers: {
            accept: 'application/vnd.github.v3+json'
        }
    })
}

export {getDrugs, getDetailByID, getListByName, getExample, getHtml, getReadMe}
