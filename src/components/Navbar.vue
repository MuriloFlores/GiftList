<script setup lang="ts">

import {useTokenStore} from "@/stores/token";
import {useGuestStore} from "@/stores/guest";
import {useSearchStore} from "@/stores/search";
import {ref} from "vue";



function logoff() {
  useTokenStore().clearToken()
}

const inputValue = ref<string>("")
function handleInput(event: Event) {
  const SearchStore = useSearchStore();
  const inputEvent = event.target as HTMLInputElement;

  SearchStore.setSearchParam(inputEvent.value)
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="navbar-brand">
        <span class="dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-fill"></i> Conta
          </a>
          <ul class="dropdown-menu">
            <li><div class="dropdown-item disabled text-dark">Olá, {{ useGuestStore().getGuestName() }}</div></li>
            <li><a class="dropdown-item" href="#"><i class="bi bi-info-circle"></i> Informações</a></li>
            <li><a class="dropdown-item" href="#"><i class="bi bi-bag-check"></i> Presentes Confirmados</a></li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <a class="dropdown-item link-danger" href="/login" @click="logoff">
                <i class="bi bi-power"></i> Sair</a></li>
          </ul>
        </span>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-cart"></i> Carrinho</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
              class="form-control me-2"
              type="search"
              placeholder="Procurar Presentes"
              aria-label="Search"
              v-model="inputValue"
              @input="handleInput"
          >
          <button class="btn btn-outline-success" type="submit">Procurar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>