import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3030/"
});

export default api;
// eğer paramStr değeri varsa /shoes 'un devamına bu string'i  ekleyip at yoksa /shoes'u at
export const getShoes=(paramsStr:string)=> api.get(paramsStr ? `/shoes${paramsStr}`: "/shoes").then((res)=>res.data);

export const getShoe=(id:string)=>api.get(`/shoes/${id}`).then((res)=>res.data)
