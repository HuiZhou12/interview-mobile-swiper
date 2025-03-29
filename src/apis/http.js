import api from './instance'

//后端的各个参数接口
const getexample = () => { return api.get('xxx/xxx/xx?xx=x')}
const getexample1 = () => { return api.get('xxx/xxx/xx?xx=x1')}
const getexample2 = () => { return api.get('xxx/xxx/xx?xx=x2')}
export default {
    getexample,
    getexample1,
    getexample2

}