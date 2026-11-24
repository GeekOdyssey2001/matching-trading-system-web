
/**
 * 
 * 这里的方法请求的地址很多有共同的地方
 * 所以新建配置文件存放这些配置信息
 */

import {reqRealEndAsync} from './axiosCommon'
import {config} from './frontConfig'

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



