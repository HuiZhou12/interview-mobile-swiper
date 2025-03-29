# 移动端轮播搜索组件
![轮播图][swiper]

[swiper]: ./public/屏幕截图_29-3-2025_142746_localhost.jpeg "可点击(自动)轮播"
## 功能特性
- [x] 响应式搜索栏（支持回车触发）
- [x] 可滚动选项卡（7个标签自适应）
- [x] 自动轮播 + 点击交互
- [ ] 数据持久化（待实现）

## 技术亮点
1. 使用 `swiper@8` 实现流畅触控体验
2. 通过 Pinia 管理全局状态(待填充)
4. 使用 Less 嵌套编写组件作用域样式(待定义标准)

## 快速启动
```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build
```

## 组件结构
```text
├── public            // 存放静态资源（如图片、字体等）,在vite中不会把该文件作为项目入口
├── src               // 静态资源文件
    ├── apis          // axios 封装及接口请求地址
            ├── http.js    // Axios实例
            └── instance.js  //后端地址配置
    ├── assets        // 公共资源静态文件（项目自带，可略）
    ├── components    // 公共组件
                ├── index.vue    //汇总文件
                ├── SearchHeader.vue    //搜索功能
                ├── SwiperSection.vue   //轮播逻辑
                └── TabBar.vue         //选项卡组件
│  ├── store         // vue的状态管理
│  ├── utils         // 封装的工具
│  ├── App.vue       // vue项目的主组件
│  └── main.js       // vue项目的主JS文件
├── .gitignore       // gitignore忽略文件
├── index.html       // vite入口文件
├── package.json     // node包管理文件
├── README.md        // 描述文件
└── vite.config.js   // vite的配置文件
```

## 组件结构
vite + vue3.x + Pinia + element-plus + axios + less + swiper