<script setup lang="ts">
import {vMaska} from "maska/vue";
import {ref} from "vue";
import login from "@/http/login";
import router from "@/router";

const phoneNumber = ref<string>("");
const showError = ref<boolean>(false);
const errorMessage = ref<string>("")
const form = ref<HTMLFormElement | null>(null)

async function loginUser(): Promise<void> {
  if (phoneNumber.value !== "" && phoneNumber.value.length === 15) {
    try {
      await login(phoneNumber.value);
      showError.value = false
      await router.push("/dashboard")
      return
    } catch (error) {
      errorMessage.value = "Usuário não encontrado ou inexistente"
      showError.value = true;
    }
  }

  showError.value = true;
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center w-100 vh-100">
    <form
        class="col-sm-4 col-10 p-3 border py-5 rounded-2 shadow-lg"
        action="/dashboard"
        @submit.prevent="loginUser">
      <h2 class="text-center">Login</h2>
      <label class="form-text">Telefone:</label>
      <input class="form-control"
             :class="{ 'is-invalid': showError }"
             type="text"
             id="phoneNumber"
             v-maska="'(##) #####-####'"
             placeholder="Ex.: (99) 99999-9999"
             v-model="phoneNumber"
             minlength="14"
             required/>
      <div v-if="showError" class="invalid-feedback d-block">
        {{ errorMessage != "" ? errorMessage : "Por favor insira um usuário válido" }}
      </div>
      <button type="submit" class="btn btn-success col-12 my-2">Login</button>
    </form>
  </div>


</template>

<style scoped>

</style>