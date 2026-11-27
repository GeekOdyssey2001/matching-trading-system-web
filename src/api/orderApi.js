import { reqRealEndAsync } from "./axiosCommon";
import {config} from './frontConfig'
import store from "@/store";

//查资金
export const queryBalance = () =>{
    reqRealEndAsync("post",
        config.real_domain,
        '/api/balance',
        {uid:sessionStorage.getItem('uid')},
        (code,msg,data) =>{
            store.commit("updateBalance",data)
        })
}

//查持仓
export const queryPosi = () =>{
    reqRealEndAsync("post",
        config.real_domain,
        '/api/posiInfo',
        {uid:sessionStorage.getItem('uid')},
        (code,msg,data) =>{
            store.commit("updatePosi",data)
        })
}

//查委托
export const queryOrder = () =>{
    reqRealEndAsync("post",
        config.real_domain,
        '/api/orderInfo',
        {uid:sessionStorage.getItem('uid')},
        (code,msg,data) =>{
            store.commit("updateOrder",data)
        })
}

//查成交
export const queryTrade = () =>{
    reqRealEndAsync("post",
        config.real_domain,
        '/api/tradeInfo',
        {uid:sessionStorage.getItem('uid')},
        (code,msg,data) =>{
            store.commit("updateTrade",data)
        })
}
