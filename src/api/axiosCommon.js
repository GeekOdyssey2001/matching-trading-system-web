
//路由器
import router from '../router'
// 把json转化为字符串
// eg：let a = {name: hello,age=13} => qs.Stringfy(a) 结果即name=hello&age=13
import Qs from 'qs';
//包装了ajax，方便http调用
import axios from 'axios';

//通用公共方法（包含回调）
export const reqRealEndAsync = (method,baseUrl,url,params,callback) =>{
    params.token = sessionStorage.getItem('token'); //每次请求都带上token
    return axios({
        timeout:5000,
        baseUrl:baseUrl,
        method:method,
        url:url,
        headers:{
            'Content-type':'application/x-www-form-urlencoded', //对应的是  {name: hello,age=13} => qs.Stringfy(a) 结果即name=hello&age=13
        },
        data:Qs.stringify(params), 
        //false -- split
        //true -- list<String>
        traditional:true, //日常使用，默认是false，false含义是ajax会把data的值深度序列化,如果data的值是数组，则需要分割难道值

    }).then(res =>{
        let result = res.data; 
        //返回的数据，放到res的data中
        //前后端数据做了约定，code，message，data
        //code：0 --成功，1/2/其他 --失败
        //message：后台给前台返回的信息
        //data：json格式数据，内容不定，基于业务
        if(result.code == 1){
            //验证失败
            router.replace({
                path:"login", //跳转到首页
                query:{
                    msg:result.message //显示什么信息
                }
            });
        }else if(result.code == 0){
            //成功回调
            if(callback != undefined){
                callback(result.code,result.message,result.data);
            }
        }
    });

}; //method：get还是post；baseUrl：url所在；url：实际url，params：参数；callback：回调函数

//通用公共方法（不包含回调）
export const reqRealEnd = (method,baseUrl,
    url,params) =>{
        return axios({
            timeout:5000,
            baseUrl:baseUrl,
            method:method,
            url:url,
            headers:{
                'Content-type':'application/x-www-form-urlencoded', //对应的是  {name: hello,age=13} => qs.Stringfy(a) 结果即name=hello&age=13
            },
            data:Qs.stringify(params), 
            //false -- split
            //true -- list<String>
            traditional:true, //日常使用，默认是false，false含义是ajax会把data的值深度序列化,如果data的值是数组，则需要分割难道值
        });
};

