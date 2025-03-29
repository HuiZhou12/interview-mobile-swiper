<template>
    <div class="swiper_wrapper">
        <swiper
        :slides-per-view="auto"
        :space-between="30"
        :modules="modules"
        :centeredSlides="true"
        :pagination="{clickable:true}"
        :autoplay="{delay:3000}"
        >
            <swiper-slide v-for="(item) in pictures" :key="item.url">
                <el-image
                :src="item.src"
                :alt="item.name"
                @click="handleSlideClick(item.url)">
                </el-image>
            </swiper-slide>

        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue' 
// 引入swiper样式（按需导入）
import 'swiper/css'
import 'swiper/css/pagination' // 轮播图底面的小圆点
import 'swiper/css/scrollbar'  // 轮播图的滚动条， 轮播图里一般不怎么会使用到滚动条，如果有用到的话import导入就行
import { Autoplay, Pagination, Navigation } from 'swiper/modules'//自动播放轮波图，翻页按钮以及下方小圆点

export default {
    name:'SwiperSection',
    props:['pictures'],
    emits:['slide-click'],
    components:{
        Swiper,
        SwiperSlide
    },
    setup(props,context){
        //汇总样式
        const modules = [Autoplay, Pagination, Navigation]
        const handleSlideClick = (url) => {
            context.emit('slide-click',url)
        }

        return {
            modules,
            handleSlideClick
        }
    }
}
</script>

<style lang="less"> 
.swiper 
{
  .swiper-slide 
  {
    border-radius: 12px;
    overflow: hidden;
  }
}

.swiper .swiper-pagination-bullet-active 
{
  width: 15px;
  border-radius: 12px;
  background-color: red;
  transition: all 0.3s ease;
}
.swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

.swiper {
  .swiper-slide {
    transition: transform 0.3s ease-in-out;
  }

  .swiper-slide-prev {
    transform: scale(0.8);  /* 使上一张图略微缩小 */
    opacity: 0.6;  /* 降低上一张图的透明度 */
  }

  .swiper-slide-next {
    transform: scale(0.8);  /* 使下一张图略微缩小 */
    opacity: 0.6;  /* 降低下一张图的透明度 */
  }

  .swiper-slide-active {
    transform: scale(1);  /* 保持当前活动图的大小 */
    opacity: 1;  /* 保持当前活动图的透明度 */
  }
}
</style>
