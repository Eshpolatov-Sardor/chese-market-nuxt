<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useCounterStore } from "@/stores/cart";

const isLoggedIn = ref(false);
const cartStore = useCounterStore();
const totalPrice = computed(() =>
  cartStore.cart.reduce((total, item) => total + item.price * item.quantity, 0)
);

const totalQuantity = computed(() =>
  cartStore.cart.reduce((total, item) => total + item.quantity, 0)
);

onMounted(() => {
  const storedData = localStorage.getItem("confirmationData");
  isLoggedIn.value = storedData ? true : false;
});
</script>

<template>
  <div>
    <header class="flex justify-between items-center py-1 font-sans text-xxs">
      <div class="flex gap-2">
        <NuxtImg class="w-6" src="/clock.png" />
        <p>Пн-Пт 9:00 - 18:00</p>
      </div>
      <div class="flex gap-8">
        <NuxtLink to="about">О компании</NuxtLink>
        <NuxtLink to="akcionnye">Акционные товары</NuxtLink>

        <div class="flex gap-2 cursor-pointer">
          <NuxtImg class="w-6" src="/user.png" />
          <template v-if="!isLoggedIn">
            <NuxtLink to="login">Войти в аккаунт</NuxtLink>
          </template>
          <template v-if="isLoggedIn">
            <NuxtLink to="account">Личный кабинет</NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <nav
      class="flex justify-between items-center p-4 text-black border-b border-t"
    >
      <div class="flex items-center">
        <NuxtLink to="/">
          <NuxtImg
            class="w-[200px] h-[60px]"
            src="/chess_market.png"
            alt="Logo"
          />
        </NuxtLink>
      </div>
      <ul class="flex space-x-4 justify-evenly items-center">
        <li class="flex items-center space-x-2 w-40">
          <NuxtImg
            src="//delivery-06 1.png"
            alt="Logo"
            class="mr-2 w-8 h-8"
          />
          <NuxtLink
            to=""
            class="hover:text-gray-400 opacity-40 font-sans text-xxs"
            >Бесплатная доставка</NuxtLink
          >
        </li>
        <li class="flex items-center space-x-2 w-44">
          <NuxtImg
            src="/credit-card-repeat 1.png"
            alt="Logo"
            class="mr-2 w-8 h-8"
          />
          <NuxtLink
            to=""
            class="hover:text-gray-400 opacity-40 font-sans text-xxs"
            >Скидка при оплате на сайте</NuxtLink
          >
        </li>
        <li class="flex items-center space-x-2 w-32">
          <NuxtImg
            src="/user-protection-shield-square 1.png"
            alt="Logo"
            class="mr-2 w-8 h-8"
          />
          <NuxtLink
            to=""
            class="hover:text-gray-400 opacity-40 font-sans text-xxs"
            >Бесплатная доставка</NuxtLink
          >
        </li>
        <li class="flex items-center space-x-2">
          <NuxtImg
            class="w-[24px] h-[24px]"
            src="/telegram.png"
            alt="Logo"
          />
          <NuxtImg
            class="w-[24px] h-[24px]"
            src="/watsapp.png"
            alt="Logo"
          />
          <NuxtImg
            class="w-[24px] h-[24px]"
            src="/messinge.png"
            alt="Logo"
          />
        </li>
        <li class="border-l border-r border-black font-sans text-xxs">
          <div class="ml-4 mr-4">
            <a>+998 94 021 79 78</a>
            <div
              class="flex items-center border border-yellow-400 p-1 gap-2 rounded-lg"
            >
              <NuxtImg
                class="w-[24px] h-[24px]"
                src="/mobile.png"
                alt="Logo"
              />
              <a href="tel:+998940217978">Заказать звонок</a>
            </div>
          </div>
        </li>
        <NuxtLink
          to="/baskel"
          class="flex items-center space-x-4 font-sans text-xxs relative"
          v-if="cartStore.cart.length > 0"
        >
          <span>
            <p>Ваша корзина</p>
            <button>{{ totalPrice.toFixed(2) }} руб.</button>
          </span>
          <NuxtImg class="w-[44px] h-[44px]" src="/savat.png" alt="Logo" />
          <div
            class="absolute text-center w-6 -top-4 text-[12px] -right-2 bg-yellow-500 px-1 py-1 rounded-full"
          >
            {{ totalQuantity }}
          </div>
        </NuxtLink>
        <NuxtLink
          to="/baskel"
          class="flex items-center space-x-4 font-sans text-xxs relative"
          v-if="cartStore.cart.length === 0"
        >
          <span>
            <p>Ваша корзина</p>
            <button>{{ totalPrice.toFixed(2) }} руб.</button>
          </span>
          <NuxtImg class="w-[44px] h-[44px]" src="/savat.png" alt="Logo" />
        </NuxtLink>
      </ul>
    </nav>
    <main class="flex justify-between items-center p-2 text-black border-b">
      <div class="flex items-center gap-6 mt-2">
        <div class="relative flex items-center group gap-1">
          <NuxtLink
            class="font-sans text-xxs hover:text-yellow-800 cursor-pointer"
            to="">Рецепты</NuxtLink>
          <NuxtImg
            class="w-[12px] h-[12px] mt-1 group-hover:hidden"
            src="/down-arrow.png"
            alt="Logo"
          />
          <NuxtImg
            class="w-[12px] h-[12px] mt-1 hidden group-hover:block"
            src="/up-arrow.png"
            alt="Logo"
          />
          <div
            class="absolute w-64 left-0 top-full mt-1 hidden group-hover:block bg-white border rounded shadow-lg"
          >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to="/rechip/recepty"
              >Мягкие сыры без созревания</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to="/rechip/molodye"
              >Молодые сыры</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to="/rechip/polutverdye"
              >Полутвердые сыры</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to=""
              >Паста Филата</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to=""
              >Рассольные сыры</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to=""
              >Сывороточные сыры</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to=""
              >Сыры с плесенью</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to=""
              >Твердые сыры</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to=""
              >Кисломолочные продукты</NuxtLink
            >
            <NuxtLink
              class="block px-4 py-2 font-sans text-xxs text-black hover:bg-yellow-800 hover:text-white cursor-pointer"
              to=""
              >Творожные сыры</NuxtLink
            >
          </div>
        </div>
        <NuxtLink
          class="font-sans text-xxs text-gray-700 hover:text-yellow-500 tracking-wide cursor-pointer"
          to="naborydylya"
          >Наборы для Сыроделия</NuxtLink
        >
        <NuxtLink
          class="font-sans text-xxs text-gray-700 hover:text-yellow-500 tracking-wide cursor-pointer"
          to="spravichnik"
          >Справочник сыродела</NuxtLink
        >
        <NuxtLink
          class="font-sans text-xxs text-gray-700 hover:text-yellow-500 tracking-wide cursor-pointer"
          to="dostavka"
          >Доставка и оплата</NuxtLink
        >
        <NuxtLink
          class="font-sans text-xxs text-gray-700 hover:text-yellow-500 tracking-wide cursor-pointer"
          to="kontaky"
          >Контакты</NuxtLink
        >
      </div>
      <div
        class="flex items-center space-x-2 group border border-black rounded-lg p-1 opacity-35"
      >
        <NuxtImg class="w-[24px] h-[24px]" src="/search.png" />
        <InputEntry type="text" />
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
