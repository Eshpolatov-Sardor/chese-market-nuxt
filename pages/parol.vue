<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { useForm } from "vee-validate";
import Acconat from "../components/Acconat.vue";

const schema = yup.object({
  old_password: yup.string().required("Старый пароль обязателен"),
  new_password: yup
    .string()
    .required("Новый пароль обязателен")
    .min(6, "Пароль должен быть не менее 6 символов"),
  new_password_confirm: yup
    .string()
    .oneOf([yup.ref("new_password")], "Пароли должны совпадать")
    .required("Подтверждение нового пароля обязательно"),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const changePassword = (values) => {
  console.log("Password changed with values:", values);
};
</script>

<template>
  <div class="p-4">
    <Acconat />
    <h1 class="text-2xl mt-4">Изменить пароль</h1>
    <Form
      @submit.prevent="handleSubmit(changePassword)"
      class="mt-4 flex justify-between items-center"
    >
      <div class="mb-4">
        <label for="old_password" class="block mb-2">Старый пароль</label>
        <Field
          name="old_password"
          as="input"
          type="password"
          id="old_password"
          class="border rounded p-2 w-80"
        />
        <ErrorMessage name="old_password" class="text-red-500" />
      </div>
      <div class="mb-4">
        <label for="new_password" class="block mb-2">Новый пароль</label>
        <Field
          name="new_password"
          as="input"
          type="password"
          id="new_password"
          class="border rounded p-2 w-80"
        />
        <ErrorMessage name="new_password" class="text-red-500" />
      </div>
      <div class="mb-4">
        <label for="new_password_confirm" class="block mb-2"
          >Подтверждение нового пароля</label
        >
        <Field
          name="new_password_confirm"
          as="input"
          type="password"
          id="new_password_confirm"
          class="border rounded p-2 w-80"
        />
        <ErrorMessage name="new_password_confirm" class="text-red-500" />
      </div>
      <button
        type="submit"
        class="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Сохранить
      </button>
    </Form>
  </div>
</template>
