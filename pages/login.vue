<script setup lang = "ts">
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { ref } from "vue";

const simpleSchema = yup.object({
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Email is required").min(8),
});

function submit(values) {
  const templateParams = {
    to_email: values.email,
    message: `Your password is: ${values.password}`,
  };

  emailjs
    .send("79807980", "template_gijnlem", templateParams, "cxIIy8HA8TX-Ao_MR")
    .then((response) => {
      alert("Email sent successfully!", response.status, response.text);

      storeInLocalStorage(values);
    })
    .catch((err) => {
      console.error("Failed to send email. Error: ", err);
      alert("Failed to send email.");
    });
}

function storeInLocalStorage(values) {
  const confirmationData = {
    email: values.email,
    password: values.password,
  };

  localStorage.setItem("confirmationData", JSON.stringify(confirmationData));
}
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center justify-center font-sans text-xxs pb-10"
  >
    <div class="w-full md:w-1/2 p-8 bg-white mt-10 rounded-lg">
      <h2 class="text-2xl text-center font-bold mb-4 py-6">
        Постоянный покупатель
      </h2>
      <Form
        @submit="submit"
        :validation-schema="simpleSchema"
        class="mt-4 flex flex-col gap-4 w-full"
      >
        <Label>Электронная почта *</Label>
        <Field
          name="email"
          type="email"
          class="w-full border p-4 rounded-md"
          placeholder="yourname@mail.com"
        />
        <ErrorMessage name="email" component="div" class="text-red-500" />
        <Label>Ваш пароль *</Label>
        <Field
          name="password"
          type="password"
          class="w-full border p-4 rounded-md"
          placeholder="От 8 и более символов "
        />
        <ErrorMessage name="password" component="div" class="text-red-500" />

        <button type="submit" class="w-full border p-3 rounded-md bg-amber-500">
          Войти
        </button>
      </Form>
      <p class="mt-4 text-sm">
        Еще не являетесь участником?
        <NuxtLink to="register" class="text-blue-500"
          >Зарегистрируйтесь сейчас.</NuxtLink
        >
      </p>
      <div class="mt-4 space-y-3 text-white text-center">
        <div
          class="flex-1 mx-1 p-2 bg-blue-400 border rounded flex items-center justify-between"
        >
          <NuxtImg src="/google.png" />
          Войти через Google
          <div></div>
        </div>
        <div
          class="flex-1 mx-1 p-2 gap-2 bg-blue-400 border rounded flex items-center justify-center"
        >
          <NuxtImg src="/vk-com.png" />
          Войти с VK ID
        </div>
        <div
          class="flex-1 mx-1 p-2 bg-gray-800 border rounded flex items-center justify-between"
        >
          <NuxtImg src="/yandex.png" />
          Войти с Яндекс ID
          <NuxtImg class="w-8" src="/user-100.png" />
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 p-8 py-64 mt-14 bg-yellow-100 text-center">
      <h2 class="text-2xl font-bold mb-4">Создайте аккаунт</h2>
      <p class="mb-4">
        Делайте покупки быстро и удобно, отслеживайте статус заказа и получайте
        скидки.
      </p>
      <NuxtLink
        to="register"
        class="p-2 bg-transparent border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white"
      >
        Зарегистрироваться
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
</style>
