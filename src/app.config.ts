export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/home'
  ],
  subpackages: [
    {
      root: 'subs/book',
      pages: ['index/index']
    },
    {
      root: 'subs/my',
      pages: ['index/index']
    },
    {
      root: 'subs/search',
      pages: ['index/index']
    },
  ],
  
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    'scope.userLocation': {
      desc: '位置信息将用于事件上报'
    },
    
  },
  requiredBackgroundModes: ['audio', 'location'],
  requiredPrivateInfos: ['getLocation', 'chooseLocation']

})
