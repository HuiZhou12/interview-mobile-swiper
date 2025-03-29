import './assets/main.css'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/dist/index.css'
import * as getApis from './apis/http'
import app from './utlis/app'

//绑定全局属性

app.config.globalProperties.$http = getApis

//引入个各个组件
app.use(createPinia()).use(ElementPlus)

//挂载
app.mount('#app')
