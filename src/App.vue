<script lang="ts">
import { defineComponent } from "vue";
import Todo from "./components/Todo.vue";

export default defineComponent({
  setup() {},
  components: { Todo },
});
</script>

<template>
  <div
    class="h-full min-h-screen w-full flex flex-col items-center justify-center"
  >
    <Todo />
  </div>
</template>