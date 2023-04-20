<template>
  <nut-config-provider :theme-vars="themeVars">
    <view class="index">
    <view>
      <img src="" alt="">
    </view>
    hello
    {{ msg }} <Dongdong />
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>
  </view>
  </nut-config-provider>
 
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
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

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    const themeVars = reactive({
      primaryColor: '#2c68ff',
      primaryColorEnd: '#2c68ff'
    });

    return {
      ...toRefs(state),
      handleClick,
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
