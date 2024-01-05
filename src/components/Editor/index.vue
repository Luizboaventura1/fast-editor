<template>
  <div
    :style="`background-color: ${bgEditor};height: ${props.height}px;`"
    class="h-[500px] w-[600px] ring-1 grid grid-rows-[auto,auto,1fr] bg-bgPrimary ring-borderColor overflow-hidden rounded-md"
    :class="editorBackground"
  >
    <Toolbar>
      <ButtonTemplate @click="bold" size="30"
        ><BoldIcon size="22"
      /></ButtonTemplate>

      <ButtonTemplate @click="italic" size="30"
        ><ItalicIcon size="17"
      /></ButtonTemplate>

      <ButtonTemplate @click="bulletList" size="30"
        ><OrderedListIcon size="17"
      /></ButtonTemplate>
      <button
        class="text-white"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        teste
      </button>
    </Toolbar>
    <DividerDefault />
    <div class="overflow-y-auto">
      <floating-menu
        :editor="editor"
        :tippy-options="{ duration: 100 }"
        v-if="editor"
      >
        <FloatingOptionsMenu>
          <ButtonTemplate @click="bold" size="24"
            ><BoldIcon size="20"
          /></ButtonTemplate>

          <ButtonTemplate @click="italic" size="24"
            ><ItalicIcon size="16"
          /></ButtonTemplate>

          <ButtonTemplate @click="bulletList" size="24"
            ><OrderedListIcon size="16"
          /></ButtonTemplate>
        </FloatingOptionsMenu>
      </floating-menu>
      <editor-content :editor="editor" fontSize="16" />
    </div>
  </div>
</template>

<script setup>
import Toolbar from "./Toolbar/index.vue";
import ButtonTemplate from "./Buttons/ButtonTemplate.vue";
import { computed, watch } from "vue";
import BoldIcon from "./Icons/BoldIcon.vue";
import ItalicIcon from "./Icons/ItalicIcon.vue";
import OrderedListIcon from "./Icons/OrderedListIcon.vue";
import DividerDefault from "./Dividers/DividerDefault.vue";
import { useEditor, EditorContent, FloatingMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { ref } from "vue";
import FloatingOptionsMenu from "./FloatingOptionsMenu/index.vue";
import Document from "@tiptap/extension-document";

// Editor

const CustomDocument = Document.extend({
  content: "heading block*",
});

const editor = useEditor({
  content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
  extensions: [
    CustomDocument,
    StarterKit.configure({
      document: false,
    }),
  ],
  editorProps: {
    attributes: {
      class: "text-primaryColor p-2 outline-none border-none",
    },
  },
  editable: true,
});

const bold = () => {
  editor.value.chain().focus().toggleBold().run();
};

const italic = () => {
  editor.value.chain().focus().toggleItalic().run();
};

const bulletList = () => {
  editor.value.chain().focus().toggleBulletList().run();
};

// Floating menu
let isEditable = ref(true);

watch(isEditable, (val) => {
  editor.value.setEditable(val);
});

// Styles of editor

const props = defineProps({
  editorBackground: String,
  height: String,
  placeholderF: String,
});

const defaultColor = "'#fff'";

const bgEditor = computed(() => {
  if (props.editorBackground) return props.editorBackground;
  else return defaultColor;
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 5px;
  border-radius: 10px;
  background-color: #121214;
}

::-webkit-scrollbar-thumb {
  background-color: #2f2f34;
}

.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }
}
</style>
