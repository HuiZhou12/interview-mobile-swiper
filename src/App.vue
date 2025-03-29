<template>
  <!-- 网页主体 -->
  <div class="main_container">
    <Topindex/>
  </div>
</template>




<script>
import Topindex from './components/Index.vue'

export default {
    name:'App',
    components:{
        Topindex
    }
}
</script>


<style lang="less" scoped>
.main_container
{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  
}
</style>
