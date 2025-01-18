<script setup lang="ts">
import { ref, computed } from "vue";
import { useCounterStore } from "@/stores/cart";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const cartStore = useCounterStore();

const simpleSchema = yup.object({
  email: yup.string().required("Email Name is required").email(),
  username: yup.string().required("User Name is required"),
  last_name: yup.string().required("Last Name is required"),
  first_name: yup.string().required("Страна Name is required"),
  city_name: yup.string().required("Адрес Name is required"),
  nimber_name: yup.string().required("Number Name is required"),
});

const totalPrice = computed(() =>
  cartStore.cart.reduce((total, item) => total + item.price * item.quantity, 0)
);

function submit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>

<template>
  <div class="flex justify-between">
    <div class="w-3/5 mt-12">
      <div
        v-if="cartStore.cart.length === 0"
        class="text-center text-lg text-gray-500 mt-6 flex flex-col justify-center gap-10 items-center"
      >
        <NuxtImg class="w-full rounded-lg" src="/gif/basket.gif" />
      </div>

      <div v-else class="flex flex-col justify-center gap-6">
        <div
          v-for="item in cartStore.cart"
          :key="item._id"
          class="cart-item border border-gray-300 rounded-lg shadow-md p-4 bg-white"
        >
          <div class="flex items-center gap-10">
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              class="w-24 h-24 object-cover rounded-lg mb-4 cursor-pointer"
              @click="$router.push(`/${item._id}`)"
            />

            <div>
              <h3 class="text-xs font-sans mb-2">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm mb-2">
                Narx: {{ item.price }} руб.
              </p>
            </div>
          </div>
          <div class="flex gap-12 items-center">
            <p class="text-gray-600 text-sm mb-2">{{ item.quantity }} шт.</p>
            <p class="font-bold text-lg text-blue-500 mb-4">
              {{ (item.price * item.quantity).toFixed(2) }} руб.
            </p>

            <button
              @click="cartStore.removeFromCart(item._id)"
              class="text-white flex items-center justify-center w-12 h-12 rounded"
            >
              <NuxtImg src="/delete.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[500px]">
      <h1 class="text-xl font-bold mt-2">Оплата и доставка</h1>
      <Form
        @submit="submit"
        :validation-schema="simpleSchema"
        class="mt-4 flex flex-col gap-4"
      >
        <Label>Имя *</Label>
        <Field
          name="username"
          type="username"
          class="w-full border p-2 rounded-md"
        />
        <ErrorMessage name="username" component="div" class="text-red-500" />
        <Label>Фамилия *</Label>
        <Field
          name="last_name"
          type="last_name"
          class="w-full border p-2 rounded-md"
        />
        <ErrorMessage name="last_name" component="div" class="text-red-500" />
        <Label>Страна/регион *</Label>
        <Field
          name="first_name"
          type="first_name"
          class="w-full border p-2 rounded-md"
        />
        <ErrorMessage name="first_name" component="div" class="text-red-500" />
        <Label>Адрес (улица, дом, квартира) *</Label>
        <Field
          name="city_name"
          type="city_name"
          class="w-full border p-2 rounded-md"
        />
        <ErrorMessage name="city_name" component="div" class="text-red-500" />
        <Label>Телефон *</Label>
        <Field
          name="nuber_name"
          type="nimber_name"
          class="w-full border p-2 rounded-md"
          placeholder="+998 "
        />
        <ErrorMessage name="nimber_name" component="div" class="text-red-500" />
        <Label>Email *</Label>
        <Field
          name="email"
          type="email"
          class="w-full border p-2 rounded-md"
          placeholder="yourname@mail.com"
        />
        <ErrorMessage name="email" component="div" class="text-red-500" />
        <div class="bg-amber-200 p-2 rounded-lg">
          <span class="flex justify-between">
            <h1>Подытог</h1>
            <p v-if="cartStore.cart.length > 0">
              {{ totalPrice.toFixed(2) }} руб
            </p>
          </span>
          <span class="flex justify-between mt-10">
            <h1>Доставка</h1>
            <p>Самовывоз</p>
          </span>
        </div>
        <button type="submit" class="w-full border p-3 rounded-md bg-amber-500">
          Подтвердить заказ
        </button>
      </Form>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-item img {
  border-radius: 8px;
  margin-bottom: 1rem;
}

button {
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
