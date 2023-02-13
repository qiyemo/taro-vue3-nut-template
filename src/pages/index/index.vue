<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ state.msg }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="login">登录2</nut-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
import {doLogin} from '../../utils/api.weapp';

const state = reactive(
  {
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
     
      cover: false
    }
);

const login = async () => {
  const ret = await doLogin({
    password: '5f83f54fb34e2eed0439d37d80f5b1a3',
    username: '万叶'
  });
  console.log('ret', ret);
}; 

</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
