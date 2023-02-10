<template>
  <view>Hello {{msg}}</view>
</template>
<script setup lang="ts">
import {ref} from 'vue';

const msg = ref('hello');
</script>