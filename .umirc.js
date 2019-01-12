
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'creat-umi',
      dll: false,
      hardSource: false,
      routes: {
        exclude: [
          /components/,
        ],
      },
    }],
  ],
  routes: [{//匹配路由
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/index',
        component: 'index'
      },
      {
        path: '/dashboard/analysis',
        component: 'Dashboard/Analysis'
        // routes: [
        //   { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
        //   { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
        //   { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        // ]
      },
      {
        path: '/dashboard/monitor',
        component: 'Dashboard/Monitor'
      },
      {
        path: '/dashboard/workplace',
        component: 'Dashboard/Workplace'
      },
      {
        path: '/card',
        component: './card'
      },
      {
        path: '/list',
        component: './list'
      },
    ]
  }],
  proxy: {//设置请求代理
    '/telematics': {
      target: 'http://api.map.baidu.com',
      // target: 'http://10.0.75.47:54321/eolinker_os/Mock/simple?projectID=1&uri=',
      // target: 'https://safe-falls-22549.herokuapp.com/random_joke',
      // target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke',
      changeOrigin: true
    }
  },
  theme: {//更换主题
    "@primary-color": "#30b767", // 绿色
  }
}
