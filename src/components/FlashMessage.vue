<script setup lang="ts">

import {ref} from "vue";

const props = defineProps<{
  type: string,
  message: string
}>()

const visible = ref(true);

(() => {
  setTimeout(() => {
    visible.value = false;
  }, 8000)
})()

</script>

<template>

  <div v-if="visible" :class="`alert alert-${type} col-11 text-center`" role="alert">
    {{ message }}
  </div>
</template>

<style scoped>
.alert {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
</style>