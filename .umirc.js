
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
  routes: [{
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
      { path: '/list', 
      component: './list' 
    },
    ]
  }],
}
