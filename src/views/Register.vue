<script setup lang="ts">

import {useGuestStore} from "@/stores/guest";
</script>

<template>
<h1>{{ useGuestStore().getPhoneNumber() }}</h1>
</template>

<style scoped>

</style>