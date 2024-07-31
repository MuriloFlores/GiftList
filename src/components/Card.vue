<script setup lang="ts">
import {usePresentStore} from "@/stores/presents";


const presents: Present[] = usePresentStore().filteredPresents

</script>

<template>
  <div class="col-sm-6 my-3" v-for="present in presents" :key="present.id">
    <div class="card w-100" :class="present.selected ? 'bg-success-subtle' : '' ">
      <div class="card-body d-flex justify-content-between align-items-center">
        <h5 class="card-title">{{ present.name }}</h5>
        <button v-if="present.selected" class="btn btn-sm btn-outline-dark bg-white" disabled><i
            class="bi bi-gift-fill"></i> Já Presenteado
        </button>
        <button v-else class="btn btn-sm btn-outline-success"><i class="bi bi-gift"></i> Presenteie</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>