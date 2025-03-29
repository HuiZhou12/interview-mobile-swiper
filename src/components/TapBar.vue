<template>
    <div class="tab-container">
        <div
        v-for="tab in tabs" :key="tab.id"
        @click="switchTab(tab.id)"
        :class="['tab-item',{ active: activeTab == tab.id}]">{{ tab.label }}</div>
    </div>
</template>

<script>
import { ref } from 'vue';


export default {
    name:'TapBar',
    emits:['change'],
    //接收父组件index.vue的数据
    props:['tabs'],
    setup(props,context){
        // console.log(props.tabs[0]?.label)
        const activeTab = ref(props.tabs[0]?.id)
        const switchTab = (tabId) => {
            activeTab.value = tabId
            // console.log("触发switch事件",tabId)
            context.emit('change',tabId)
        }
        return {
            switchTab,
            activeTab

        }
    }
}
</script>

<style lang="less" scoped>
.tab-container
{
    display: flex; //横向显示
    overflow: hidden;
    padding:  10px 0;
    -webkit-overflow-scrolling: touch; // 移动端惯性滚动
    .tab-item 
    {
        flex-shrink: 0;
        padding: 8px 16px;
        margin: 0 5px;
        font-size: 20pxpx;
        &:hover 
        {
            box-shadow: 0 0px 10px rgba(0, 0, 0, .1);;
            
        }
    }
    .tab-item.active
    {
        border-radius: 6px;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
        
    }
}
</style>