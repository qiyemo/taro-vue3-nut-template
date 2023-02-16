<template>
  <view class="page page-index">
    <view>
      <img src="" alt="">
    </view>
    {{ state.msg }} <Dongdong />
    <view class="btn">
      <view>
        <nut-button type="primary" @click="login">登录</nut-button>
      </view>
      <view>
        <text>Token: {{state.token}}</text>
      </view>
      <view>
        <nut-button type="primary" @click="jwd">获取经纬度</nut-button>
      </view>
      <view>
        <text>经纬度: {{state.jwd}}</text>
      </view>
      <view>
        <nut-button open-type="getPhoneNumber" @getphonenumber="phone">获取手机号</nut-button>
      </view>
      <view>
        <text>Phone: {{state.phone}}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Taro, { useLoad,useReady, useUnload, useSaveExitState } from '@tarojs/taro';


import { Dongdong } from '@nutui/icons-vue-taro';
import {doLogin} from '../../utils/api.weapp';

const state = reactive(
  {
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      token: '',
      jwd: '',
      phone: '',
     
      cover: false
    }
);

const login = async () => {
  const ret = await doLogin({
    password: '5f83f54fb34e2eed0439d37d80f5b1a3',
    username: '万叶'
  });
  console.log('ret', ret);
  state.token = ret.data;
}; 

const jwd = async () => {
  const ret = await Taro.getLocation({type: 'wgs84'});
  state.jwd = ret.latitude + ',' + ret.longitude;
}

const init = () => {
  
}

const load = () => {
  init();
}
const unload = () => {

}

const ready = () => {

}

const phone = (event: any) => {
  const {detail} = event;
  if(!detail.code){
    return;
  }
  
}



const saveExitState = () => {
  const exitState = { myDataField: 'myData' } // 需要保存的数据
  return {
    data: exitState,
    expireTimeStamp: Date.now() + 24 * 60 * 60 * 1000, // 超时时刻
  }
}
// 等同于页面的 onLoad 生命周期钩子。
useLoad(load);
// 等同于页面的 onReady 生命周期钩子，
// 从此生命周期开始可以使用 createCanvasContext 或 createSelectorQuery 等 API
// 访问小程序渲染层的 DOM 节点。
useReady(ready);
useUnload(unload);
// 每当小程序可能被销毁之前，页面回调函数 onSaveExitState 会被调用，可以进行退出状态的保存
useSaveExitState(saveExitState);

</script>

<style lang="scss">
.page-index {
  .btn{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  }
  
}

</style>
