
/**
 * 
 * 这里的方法请求的地址很多有共同的地方
 * 所以新建配置文件存放这些配置信息
 */

import {reqRealEndAsync, reqRealEnd} from './axiosCommon'
import {config} from './frontConfig'
import router from '../router'

//请求验证码 -> 请求后端验证码接口
export const queryCaptcha = (callback) => {
    return reqRealEndAsync("post",config.real_domain,
    "login/captcha",{},callback);
};

//登录 -> 请求后端登录接口
export const login = (params,callback) => {
    return reqRealEndAsync("post",config.real_domain,
    "login/userLogin",params,callback);
};

//退出登录
export const logout = () => {
    //移除登录信息
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("token");
    //跳转登录页面
    router.replace({
        path: "/",
        query: {
            msg: "成功退出"
        }
    });
    //通知柜台
    reqRealEnd("post",config.real_domain,'login/logout',{});
    
};


export const pwdUpdate = (params,callback) => {
        return reqRealEndAsync("post",config.real_domain,
        '/login/pwdUpdate',params,callback);
        
}



