<!--
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2023-04-22 22:22:34
 * @LastEditTime: 2023-04-23 23:40:48
-->
<template>
  <nut-config-provider :theme-vars="themeVars">
    <view class="index">
    <view>
      <img src="" alt="">
    </view>
    hello
    {{ msg }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">点我</nut-button>

      
    </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>
  </view>
  </nut-config-provider>
 
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
export default {
  name: 'Index',
  components: {
    Dongdong
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI4.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const handleSuccess = (result ) => {
      console.log('handleSuccess: ', result);
    }
    const handleFail = (err) => {
      console.log('handleFail: ', err);
    }
    const getPhoneNumber = async (e) => {
      console.log('getPhoneNumber e.detail.code', e.detail.code);
      // state.msg =  e.detail.code;
      const code = e.detail.code;;
      Taro.request({
        url: 'http://localhost:8080/weapp/phone-number?code=' + code,
        success: handleSuccess,
        fail: handleFail
      })
    };

    const themeVars = reactive({
      primaryColor: '#2c68ff',
      primaryColorEnd: '#2c68ff'
    });

    return {
      ...toRefs(state),
      getPhoneNumber,
      themeVars
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
