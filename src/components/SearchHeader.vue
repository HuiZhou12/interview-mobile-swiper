<template>
    <div class="search-bar">
        <el-input
        v-model =" searchText"
        style = "width: 240px"
        placeholder =" 请输入搜索词"
        :suffix-icon = "Search"
        @:keyup.enter="handleSearch"
        >
        </el-input>
    </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
export default {
    name:'SearchHeader',
    //定义自定义search事件
    emits:['search'],
    setup(props,context) {
        const searchText = ref('')
        //当触发调用handleSearch方法时，触发search事件。
        const handleSearch = () => {
            console.log("已经触发search事件",searchText.value)
            context.emit('search', searchText.value)
        }
        return {
            searchText,
            handleSearch,
            Search
        }
    }
}
</script>

<style lang="less" >
.search-bar 
{
    padding: 9px 12px 0 10px;
    position: relative;
    top: 0;
    z-index: 1;
    .el-input__inner
    {
        border-radius: 12px;
        width: 390px !important; //这里将要设置为动态的
    } 
}
 
</style>
