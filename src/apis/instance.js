import axios from 'axios'



//自定义配置

const instance = axios.create({
    timeout: 1000 * 10, //请求超时时间为10秒
    baseURL: 'http://www.example.com/', //后端接口地址
    withCredentials: true, // 表示进行跨域请求时是否携带凭证信息（cookit、HTTP认证及客户端SSL证明等）

    ValidityState: (states)=> { //自定义抛出的HTTP code 
        return states >= 200 && states < 600
    }
})

//拦截器:在请求或响应被then或catch处理前拦截
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


//向接口地址请求(动态)
const Methods = ['get', 'post']
const api = {}

Methods.forEach((method) => {
    //动态赋予api对象get个post方法
    api[method] = (uri, data, config) => {
        //使用Promise进行封装
        return new Promise( (resolve, reject) => {
            //instance实例对象里有get和post两个方法
            instance[method](uri, data, config) //这是一个动态调用的instance对象里的属性和方法，而静态调用则是使用instance.method(uri, data, config)
            //成功
            .then(response => {
                resolve(response)
            })
            //失败
            .catch(error => {
                reject(error)
            })
        })
    }
    console.log(api)
})

export default api