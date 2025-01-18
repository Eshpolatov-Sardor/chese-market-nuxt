<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, reactive } from "vue";
import { useCounterStore } from "@/stores/cart";

const route = useRoute();
const cart = useCounterStore();

const productId = route.params.rech;

const product = computed(() =>
  cart.products.find((p) => p._id.toString() === productId)
);

const state = reactive({
  isFavorite: false,
});

function toggleFavorite() {
  state.isFavorite = !state.isFavorite;
}
</script>

<template>
  <div>
    <div class="flex">
      <MenuSection />
      <div class="w-[80%]">
        <div v-if="product" class="flex items-center gap-6">
          <NuxtImg
            class="w-96 h-96 p-20 mt-12 ml-12 border shadow-lg shadow-dodger-blue-100"
            :src="product.image"
            :alt="product.title"
          />
          <div>
            <div class="flex items-center justify-end gap-2">
              <button @click="toggleFavorite" class="flex items-center gap-2">
                <NuxtImg
                  :src="
                    state.isFavorite
                      ? '../public/yellow_love.png'
                      : '../public/love.png'
                  "
                  class="w-6 h-6"
                />
                <p>{{ state.isFavorite ? "B избранном" : "В избранное" }}</p>
              </button>
            </div>
            <p class="text-2xl font-bold mb-4 text-amber-600 mt-12">
              Цена: ${{ product.price }}
            </p>
            <div class="text-xxs mb-4 flex gap-2 opacity-55">
              <div class="font-bold">Производитель:</div>
              <p>{{ product.title }}</p>
            </div>
            <div class="flex gap-4">
              <div
                class="border flex items-center justify-between px-4 py-2 w-32"
              >
                <button @click="cart.dec">-</button>
                <button>{{ cart.count }}</button>
                <button @click="cart.inc">+</button>
              </div>
              <button
                @click="cart.addToCart(product)"
                class="bg-orange-500 text-white py-2 px-20 rounded"
              >
                В корзину
              </button>
            </div>
            <div>
              <span class="flex gap-2 items-center mt-12">
                <NuxtImg class="w-6 h-6" src="../public/money-64.png" />
                <p>Возвращаем 10% бонусами</p>
              </span>
              <span class="flex gap-2 items-center mt-6">
                <NuxtImg class="w-6 h-6" src="../public/paymint.png" />
                <p>Удобные способы оплаты</p>
              </span>
              <span class="flex gap-2 items-center mt-6">
                <NuxtImg class="w-6 h-6" src="../public/protect-80.png" />
                <p>Гарантия качества</p>
              </span>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <h1 class="text-2xl font-bold text-red-500">Product not found</h1>
        </div>
        <div v-if="product" class="w-full px-12 bg-white">
          <h1 class="text-2xl font-bold mt-12">Описание</h1>
          <div class="flex gap-4 font-sans border-b py-10 mt-12">
            <div class="w-44 font-bold">Дозировка</div>
            <div>{{ product.category }}</div>
          </div>
          <div class="flex gap-4 font-sans mt-4 border-b py-10">
            <div class="w-44 font-bold">Состав</div>
            <div>{{ product.brand }}</div>
          </div>
          <div class="flex gap-4 font-sans mt-4 border-b py-10">
            <div class="w-44 font-bold">Состав</div>
            <div class="w-[700px]">{{ product.title }}</div>
          </div>
          <div class="flex gap-4 font-sans mt-4 border-b py-10">
            <div class="w-44 font-bold">Условия хранения и срок годности</div>
            <div class="w-[700px]">{{ product.description }}</div>
          </div>
          <div class="flex gap-4 font-sans mt-4 border-b py-10">
            <div class="w-44 font-bold">Транспортировка</div>
            <div class="w-[700px]">{{ product.category }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  border: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
</style>
