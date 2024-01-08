<div align="center">
 <img width="200" src="https://github.com/Luizboaventura1/fast-editor/assets/122652168/27cd0988-129c-4424-9f63-674d873ece6f" />
</div>

<h1 align="center">Fast Editor</h1>

<p align="center">Fast Editor formats your texts quickly and easily, and with a modern interface.</p>

![image](https://github.com/Luizboaventura1/fast-editor/assets/122652168/e51a6ac2-3e5d-4031-95e3-d61f59f335c9)

## How to use?

```javascript
<template>
  <div class="w-screen h-screen flex items-center justify-center bg-bgSecondary px-4">
    <Editor @getHtml="(val) => html = val" placeholder-f="Adicionar descrição..." />
  </div>
</template>

<script setup>
import Editor from "./components/Editor/index.vue"
import { ref, watchEffect } from "vue";

// use a reactive variable
let html = ref("")
</script>
```
### Get the generated html
```javascript
// use @getHtml to get the generated html
@getHtml="(val) => html = val"
```
### Props
```html
height="000px" default 100%
width="000px" default 100%
placeholder-f="Your description" default  "Descrição..."
editorBackground="#000" default #121214
```

## License 📜

- [MIT](./LICENSE)

## 🛠 Technologies

- [Vue.js 3](https://vuejs.org)
- [Tailwind css](https://tailwindcss.com)
- [Scss](https://sass-lang.com)

## How to Contribute 🚀

1. **Fork the Repository:**
   - Fork this repository by clicking the "Fork" button in the top right corner of this page. This will create a copy of the repository in your GitHub account.

2. **Clone the Repository:**
   - Clone the forked repository to your local development environment.

   ```bash
   git clone git@github.com:Luizboaventura1/fast-editor.git
   cd fast-editor
