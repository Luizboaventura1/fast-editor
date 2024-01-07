<template>
  <div class="w-screen h-screen flex items-center justify-center bg-bgSecondary px-4">
    <Editor @getHtml="(val) => html = val" placeholder-f="Adicionar descrição..." />
  </div>
</template>

<script setup>
import Editor from "./components/Editor/index.vue"
import { ref, watchEffect } from "vue";

let html = ref("")

watchEffect(() => console.log(html.value))
</script>