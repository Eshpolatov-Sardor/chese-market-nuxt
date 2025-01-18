<script setup lang="ts">

</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      type="text"
      outline="none active:none"
      class="w-[300px] bg-transparent dark:grey-[700] outline-none active:outline-none"
      placeholder="Введите название товара или артикул"
    >
  </div>
</template>
