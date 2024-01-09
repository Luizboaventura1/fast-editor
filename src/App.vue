<template>
  <Navbar />
  <div class="w-screen h-[calc(100vh-60px)] flex items-center justify-center bg-bgSecondary px-4">
    <Editor width="700" height="400" @getHtml="(val) => html = val" placeholder-f="Adicionar descrição..." />
  </div>
</template>

<script setup>
import Editor from "./components/Editor/index.vue"
import { ref, watchEffect } from "vue";
import Navbar from "./layouts/Navbar.vue";

let html = ref("")

watchEffect(() => console.log(html.value))
</script>