<script setup lang="ts">

import Card from "@/components/Card.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <div class="container-fluid col-11">
        <div class="row">
          <Card/>
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="container-fluid d-flex align-items-center justify-content-center mt-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>

</style>