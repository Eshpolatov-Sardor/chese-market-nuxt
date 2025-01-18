<script setup lang="ts">
import { ref } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import emailjs from "emailjs-com";

const router = useRouter();
const simpleSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("Password is required").min(8),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

async function submit(values) {
  try {
    const token = generateConfirmationToken();

    const serviceID = "79807980";
    const templateID = "template_gijnlem";
    const userID = "cxIIy8HA8TX-Ao_MR";

    const templateParams = {
      to_email: values.email,
      username: values.username,
      token: token,
    };

    await emailjs.send(serviceID, templateID, templateParams, userID);

    alert("A confirmation email has been sent to your email address.");

    storeConfirmationToken(token, values);
  } catch (error) {
    alert("Failed to send confirmation email: " + error.text);
  }
}

function generateConfirmationToken() {
  return Math.random().toString(36).substr(2, 9);
}

function storeConfirmationToken(userData) {
  const confirmationData = {
    username: userData.username,
    email: userData.email,
    password: userData.password,
  };

  localStorage.setItem("confirmationData", JSON.stringify(confirmationData));
  router.push("/acconat");
  location.reload();
}
defineExpose({ submit });
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center justify-center font-sans text-xxs pb-10"
  >
    <div class="w-full md:w-1/2 p-8 mt-14 bg-yellow-100 rounded-lg">
      <div class="mb-6">
        <h2 class="text-2xl font-bold mb-4 py-1">Регистрация аккаунта</h2>
        <p class="mb-4">
          Делайте покупки быстро и удобно, отслеживайте статус заказа и
          получайте скидки.
        </p>
        <NuxtImg class="mt-10" src="/phone-50.png" alt="Google" />
        <h2 class="text-2xl font-bold mb-4 py-2">Возвращаем 10% бонусами</h2>
        <p class="mb-4">
          При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется
          бесплатная доставка по всей России
        </p>
        <NuxtImg class="mt-10" src="/protect-80.png" alt="Google" />
        <h2 class="text-2xl font-bold mb-4 py-2">Возвращаем 10% бонусами</h2>
        <p class="mb-4">
          При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется
          бесплатная доставка по всей России
        </p>
        <NuxtImg class="mt-10" src="/money-64.png" alt="Google" />
        <h2 class="text-2xl font-bold mb-4 py-2">Удобные способы оплаты</h2>
        <p class="mb-4">
          При заказе на сумму от 3500 руб. и весе до 3 кг. предоставляется
          бесплатная доставка по всей России
        </p>
      </div>
    </div>
    <div class="w-full md:w-1/2 p-8 bg-white mt-10 rounded-lg">
      <h2 class="text-2xl text-center font-bold mb-4 py-6">
        Постоянный покупатель
      </h2>
      <Form
        @submit="submit"
        :validation-schema="simpleSchema"
        class="mt-4 flex flex-col gap-4 w-full"
      >
        <label>Ваше имя и фамилия *</label>
        <Field
          name="username"
          type="text"
          class="w-full border p-4 rounded-md"
          placeholder="User Name"
        />
        <ErrorMessage name="username" component="div" class="text-red-500" />

        <label>Электронная почта *</label>
        <Field
          name="email"
          type="email"
          class="w-full border p-4 rounded-md"
          placeholder="yourname@mail.com"
        />
        <ErrorMessage name="email" component="div" class="text-red-500" />

        <div class="flex gap-4">
          <div>
            <label>Ваш пароль *</label>
            <Field
              name="password"
              type="password"
              class="w-full border p-4 rounded-md"
              placeholder="От 8 и более символов"
            />
            <ErrorMessage
              name="password"
              component="div"
              class="text-red-500"
            />
          </div>
          <div>
            <label>Подтвердите пароль *</label>
            <Field
              name="confirmPassword"
              type="password"
              class="w-full border p-4 rounded-md"
              placeholder="От 8 и более символов"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              class="text-red-500"
            />
          </div>
        </div>

        <button type="submit" class="w-full border p-3 rounded-md bg-amber-500">
          Создать аккаунт
        </button>
      </Form>
      <div class="mt-4 space-y-3 text-white">
        <div
          class="flex-1 mx-1 p-2 bg-blue-400 border rounded flex items-center justify-between"
        >
          <NuxtImg src="/google.png" alt="Google" />
          Войти через Google
          <div></div>
        </div>
        <div
          class="flex-1 mx-1 p-2 gap-2 bg-blue-400 border rounded flex items-center justify-center"
        >
          <NuxtImg src="/vk-com.png" alt="VK" />
          Войти с VK ID
        </div>
        <div
          class="flex-1 mx-1 p-2 bg-gray-800 border rounded flex items-center justify-between"
        >
          <NuxtNuxtImg src="/yandex.png" alt="Yandex" />
          Войти с Яндекс ID
          <NuxtImg class="w-8" src="/user-100.png" alt="User" />
        </div>
        <div>
          <Input
            type="checkbox"
            class="mr-2 w-4 h-4 border border-yellow-500 bg-yellow-400"
          />
          <span class="ml-2 text-black"
            >Получать письма с новостями и акциями</span
          >
        </div>
        <div>
          <Input type="checkbox" class="mr-2 w-4 h-4 bg-yellow-400" />
          <span class="ml-2 text-black"
            >Я прочитал и соглашаюсь с условиями
            <a href="#" class="text-amber-500"
              >Политики конфиденциальности</a
            ></span
          >
        </div>
        <div class="text-center mt-4">
          <p class="text-black">
            Уже есть аккаунт?
            <NuxtLink to="login" class="text-amber-500"
              >Войти в аккаунт</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
