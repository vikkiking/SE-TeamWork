import axios from "axios";

function getDrugs(params) {
    return axios.get('http://47.111.186.107:9000/ruangong/drug/data/obscure/1/20', {params: params})
}

function getDetailByID(id)
{
    return axios.get('http://47.111.186.107:9000/ruangong/drug/'+id)
}
function getListByName(params)
{
    return axios.get('http://47.111.186.107:9000/ruangong/medicine/data/title',{
        params:params
    })
}
function getExample()
{
    return axios.get('/data.json')
}

function getHtml(url,params)
{
    return axios.get(url,params)
}
export {getDrugs,getDetailByID,getListByName,getExample,getHtml}
