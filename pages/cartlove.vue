<template>
  <div class="gap-2 p-4">
    <Acconat />
    <div class="p-8">
      <h1 class="text-2xl mt-4">Избранные товары</h1>
      <p class="py-4">В вашем списке желаний пока нет товаров.</p>
      <NuxtLink
        class="cursor-pointer bg-amber-500 text-white py-3 px-4 rounded-md mb-8"
        to="/"
        >Перейти в каталог</NuxtLink
      >
    </div>
  </div>
</template>
