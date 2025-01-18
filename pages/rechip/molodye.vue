<script setup lang="ts">
import { useCounterStore } from "@/stores/cart";

const cart = useCounterStore();
const products = cart.products;
</script>

<template>
  <div class="flex gap-10 font-sans text-xxs">
    <MenuSection />
    <div class="flex justify-between mt-4">
      <div class="gap-8 h-6">
        <h1 class="text-3xl font-bold mt-4 ml-4">Мягкие сыры без созревания</h1>
        <div class="grid grid-cols-4 gap-2 w-[950px] mt-4">
          <div
            v-for="product in products.slice(0, 6)"
            :key="product._id"
            class="w-52 h-64 bg-white rounded shadow flex flex-col items-center justify-between cursor-pointer"
          >
            <NuxtImg
              class="w-32 h-32 p-4"
              :src="product.image"
              :alt="product.title"
            />
            <h2 class="px-2">{{ product.title }}</h2>
            <div>
              <button
                @click="$router.push(`/rechip/${product._id}`)"
                class="text-amber-600 -ml-24 mb-2 rounded border-b-2 border-amber-600"
              >
                Читать далее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>