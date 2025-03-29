<template>
    <div class="Topindex">
        <SearchHeader/>
        <TapBar :tabs = "tabs" @change="change" />
        <SwiperSection :pictures="pictures" @slide-click="slide_click"/>
    </div>
</template>

<script>
import SearchHeader from './SearchHeader.vue'
import TapBar from './TapBar.vue'
import SwiperSection from './SwiperSection.vue'
import { reactive } from 'vue'
import { getCurrentInstance } from 'vue'
export default {
    name:'Topindex',
    components:{
        SearchHeader,
        TapBar,
        SwiperSection
    },
    setup(){
        //定义proxy方面使用aip调用
        const { proxy } = getCurrentInstance()
        //模拟后端数据
        const tabs = reactive([
            {id:1,label:'精选'},
            {id:2,label:'文学'},
            {id:3,label:'少儿'},
            {id:4,label:'动漫'},
            {id:5,label:'心灵'},
            {id:6,label:'社科'},
        ])
        //使用后端数据来的得到选项卡数量及各种参数
//         const getBanner = async() => {
//             const { data: res } = await proxy.$http.getTopbar()
//             if (res.code !== 200) {
//                 return proxy.$msg.error('数据请求失败')
//             }
//             taps.value = res.taps;
// }
//             onMounted( () => {
//                 getTopbar()
//             })


        //调用后端aip
        const change = (id) => {
            console.log('已经触发change事件',url)
            async () => {
                const {data:res} = await proxy.$http.getexample()
                if(res.code !== 200) {
                    console.log('请求失败')
                }
            }
        }
        //调用后端aip
        const slide_click = (url) => {
            console.log('已经触发slide-click事件',url)
            async () => {
                const {data:res} = await proxy.$http.getexample()
                if(res.code !== 200) {
                    console.log('请求失败')
                }
            }
            
        }
        //模拟后端数据
        const pictures = reactive([
            {src:'https://bz.wuht.net/uploads/attach/2025/02/20250222/bd811376e3fc0a5beac6e5dcd31c3d2f.png',name:'text1',url:'www1'},
            {src:'https://bz.wuht.net/uploads/attach/2025/02/20250222/95b52f0c88a7cedbdac0243c6388a6ab.png',name:'text2',url:'www2'},
            {src:3,name:'text3',url:'www3'}
        ])
        //使用后端数据来的得到论播图数量以及各种参数
//         const getBanner = async() => {
//             const { data: res } = await proxy.$http.getBanner()
//             if (res.code !== 200) {
//                 return proxy.$msg.error('数据请求失败')
//             }
//             pictures.value = res.banners;
// }
//             onMounted( () => {
//                 getBanner()
//             })


        return {
            tabs,
            change,
            pictures,
            slide_click,
        }
    }
}
</script>

<style lang="less" scoped>
.Topindex {
    margin-top: 50px;
    position:absolute;
    width: 460px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0px 10px rgba(0, 0, 0, .1);
    background-color: #fff;
    border-radius: 6px;
    padding-bottom: 30px;
}
</style>