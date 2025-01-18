<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  localStorage.clear();
  router.push("/");
  location.reload();
}
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Личный кабинет</h1>
    <div class="flex gap-10 items-center text-xs mt-4">
      <span class="flex gap-2 items-center font-sans">
        <NuxtImg class="w-4" src="../public/user.png" />
        <NuxtLink class="cursor-pointer" to="/panel"
          >Панель управления</NuxtLink
        >
      </span>
      <span class="flex gap-2 items-center">
        <NuxtImg class="w-4" src="../public/zakas.png" />
        <NuxtLink class="cursor-pointer" to="zakas">Заказы</NuxtLink>
      </span>
      <span class="flex gap-2 items-center">
        <NuxtImg class="w-4" src="../public/savat_love.png" />
        <NuxtLink class="cursor-pointer" to="cartlove">Избранные товары</NuxtLink>
      </span>
      <span class="flex gap-2 items-center">
        <NuxtImg class="w-4" src="../public/adrisa.png" />
        <NuxtLink class="cursor-pointer" to="adris">Адреса</NuxtLink>
      </span>
      <span class="flex gap-2 items-center">
        <NuxtImg class="w-4" src="../public/carta.png" />
        <NuxtLink class="cursor-pointer" to="">Способы оплаты</NuxtLink>
      </span>
      <span class="flex gap-2 items-center">
        <NuxtImg class="w-4" src="../public/qulif.png" />
        <NuxtLink to="/parol" class="cursor-pointer">Сменить пароль</NuxtLink>
      </span>
      <span class="flex gap-2 items-center">
        <NuxtImg class="w-4" src="../public/lagout.png" />
        <NuxtLink @click="logout" class="cursor-pointer" to="">Выйти</NuxtLink>
      </span>
    </div>
  </div>
</template>