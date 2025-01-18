<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
const zoom = ref(14);

const simpleSchema = yup.object().shape({
  text: yup.string().required("Ваше имя is required"),
  email: yup.string().required("Email is required").email(),
  textarea: yup.string().required("Сообщение или вопрос is required"),
});

function submit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>

<template>
  <div class="flex gap-10 font-sans text-xxs">
    <MenuSection />
    <div class="mt-4 w-[75%]">
      <h1 class="text-3xl font-serif">Контакты</h1>
      <div class="flex justify-between border-b pb-6 mt-6">
        <span>
          <h1 class="text-2xl">ТЕЛЕФОН:</h1>
          <a href="tel:+998940217978">+998 94 021 79 78</a>
        </span>
        <span>
          <h1 class="text-2xl">МЫ РАБОТАЕМ:</h1>
          <p>Понедельник-пятница</p>
          <p>с 9:00 до 18:00</p>
          <p>суббота — выходной</p>
          <p>воскресенье — выходной</p>
        </span>
        <span>
          <h1 class="text-2xl">Электронная почта:</h1>
          <p>По вопросам связанным с заказами:</p>
          <a href="info@syromir.ru">info@syromir.ru</a>
          <p>По вопросам сотрудничества:</p>
          <a href="info@syromir.ru">info@syromir.ru</a>
        </span>
      </div>
      <div class="flex justify-between mt-4 border-b pb-6">
        <span>
          <h1 class="text-2xl">АДРЕС ОФИСА:</h1>
          <p>
            129110, г. Москва , Угрешская <br />
            улица, дом 12, строение 4
          </p>
        </span>
        <span>
          <h1 class="text-2xl">ЮРИДИЧЕСКОЕ ЛИЦО:</h1>
          <p>ООО «Сыроварение»</p>
          <p>ИНН 9702028910</p>
          <p>ОГРН 1217700038621</p>
        </span>
        <span>
          <h1 class="text-2xl">Юр. адрес:</h1>
          <p>
            129110, г. Москва , Угрешская улица, <br />
            дом 12, строение 4
          </p>
        </span>
      </div>
      <div class="flex justify-between mt-4">
        <div>
          <h1 class="text-2xl mt-4">Остались вопросы?</h1>
          <p class="mt-4">Заполните форму и мы вам ответим</p>
          <Form
            @submit="submit"
            :validation-schema="simpleSchema"
            class="mt-4 flex flex-col gap-4"
          >
            <Field
              name="text"
              type="text"
              class="w-96 border p-2 rounded-md"
              placeholder="Ваше имя"
            />
            <ErrorMessage name="text" component="div" class="text-red-500" />

            <Field
              name="email"
              type="email"
              class="w-96 border p-2 rounded-md"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" class="text-red-500" />

            <Field
              name="textarea"
              as="textarea"
              class="w-96 h-28 border p-2 rounded-md"
              placeholder="Сообщение или вопрос"
            />
            <ErrorMessage
              name="textarea"
              component="div"
              class="text-red-500"
            />

            <button
              type="submit"
              class="w-32 border p-3 rounded-md bg-amber-500"
            >
              Отправить
            </button>
          </Form>
        </div>
        <div style="height: 50vh; width: 35vw">
          <LMap
            ref="map"
            :zoom="zoom"
            :center="[55.71343, 37.69922]"
            :use-global-leaflet="false"
          >
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="Ugreshskaya Ulitsa, 12с4, Moskva, <br> Russia, 115088"
              layer-type="base"
              name="OpenStreetMap"
            />
          </LMap>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  opacity: 0.6;
}
a {
  opacity: 0.6;
  text-decoration: underline;
  color: black;
  border-bottom: 1px;
}
</style>
