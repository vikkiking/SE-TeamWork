import axios from "axios";

axios.defaults.timeout = 20000

function getDrugs(cur, limit, params) {
    return axios.get('//yuneko.me/api/drug/data/obscure/' + (cur ? cur : 1) + '/' + limit, {params: params})
}

function getDetailByID(id) {
    return axios.get('//yuneko.me/api/drug/' + id)
}

function getListByName(params) {
    return axios.get('//yuneko.me/api/medicine/data/title', {
        params: params
    })
}

function getData(params) {
    // return axios.get('/data.json')
    return axios.get('//yuneko.me:9934/api/getDrugByName',{
        params:params
    })
}
function getDosageForm(params)
{
    return axios.get('//yuneko.me:9934/api/getAllDosageForm',{
        params:params
    })
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

export {getDrugs, getDetailByID, getListByName, getData, getHtml, getReadMe,getDosageForm}
