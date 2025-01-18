<script setup lang="ts">
import { useCounterStore } from "@/stores/cart";

const cart = useCounterStore();
const products = cart.products;
</script>

<template>
  <div>
    <div>
      <div class="flex gap-10 font-sans text-xxs">
        <MenuSection />
        <div class="flex justify-between mt-4">
          <div class="flex gap-8 h-6">
            <div>
              <h1 class="text-3xl font-bold">Ингредиенты</h1>
              <div class="grid grid-cols-4 gap-2 w-[950px]">
                <div
                  v-for="product in products.slice(0, 12)"
                  :key="product._id"
                  class="w-52 h-72 bg-white rounded shadow flex flex-col items-center justify-between cursor-pointer"
                  @click="$router.push(`/${product._id}`)"
                >
                  <NuxtImg
                    class="w-32 h-32 p-4"
                    :src="product.image"
                    :alt="product.title"
                  />
                  <h2 class="px-2 text-center">{{ product.title }}</h2>
                  <div>
                    <p class="pr-20 opacity-40">Price: ${{ product.price }}</p>
                    <button
                      @click.stop="cart.addToCart(product)"
                      class="bg-orange-500 text-white py-2 px-10 mb-2 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="font-sans text-md mt-24">
      <h1 class="text-amber-500 text-2xl">
        Интернет-магазин товаров для домашнего сыроделия
      </h1>
      <p class="mt-4">
        Магия вкуса и искусства приготовления сыра существует сотни столетий.
        Сыр, этот древний и возвышенный продукт, служит источником вдохновения
        для гурманов и любителей кулинарных изысков во всем мире. Наш
        интернет-магазин товаров для сыроварения в Москве – хранилище знаний и
        инструментов для тех, кто желает погрузиться в этот мир.
      </p>
      <h1 class="text-amber-500 text-2xl mt-4">
        Товары для сыроделия в домашних условиях и коммерческих целях в магазине
        Сыромир
      </h1>
      <ul class="mt-4 list-disc ml-6">
        <li>
          Большой выбор: мы собрали все инструменты и ингредиенты, чтобы вы
          приготовили самый вкусный и неповторимый сыр. Закваски, ферменты,
          формы, прессы – купить в Москве все для сыроварения дома в
          интернет-магазине можно в два клика.
        </li>
        <li>
          Низкие цены: приятный прайс, доступное оборудование, широкий
          ассортимент.
        </li>
        <li>
          Скидки: акции для постоянных клиентов и новичков в мире сыромании.
          Специальные предложения сделают процесс более приятным.
        </li>
        <li>
          Обмен опытом: на сайте собраны статьи, советы и отзывы для новичков и
          опытных сыроваров. Это настоящая сокровищница знаний и идей.
        </li>
        <li>
          Прозрачная система доставки: вам не нужно переживать о том, как ваш
          заказ доберется до вас. Просто выбирайте товары, оформляйте заказ, и
          ждите, когда он прибудет к вашей двери.
        </li>
      </ul>
      <h1 class="text-amber-500 text-2xl mt-4">
        Какой сыр варить дома: рецепт домашнего сыроварения
      </h1>
      <p class="mt-4">
        Каждый может заняться сыроварением в домашних условиях. Приготавливать
        дома можно любой вид сыра. Рецепты и все оборудование можно приобрести в
        нашем магазине для сыроварения. Основа – молоко. Лучше всего
        использовать свежее, натуральное.
      </p>
      <p class="mt-4">
        Чтобы молоко превратилось в сыр, понадобятся закваски и ферменты. Они
        будут активно работать с разогретым до определенной температуры (зависит
        от рецепта) молоком.
      </p>
      <p class="mt-4">
        После активации фермента нужно разделить сгустившееся молоко на молочную
        сыворотку и сгусток. Последнее следует аккуратно переложить в форму.
        После того как сыр приобрел форму, его нужно поставить в прохладное
        место, чтобы он подсох. Производство может занять несколько дней.
      </p>
      <h1 class="text-amber-500 text-2xl mt-4">
        Купить все для сыроварения в домашних условиях: товары в
        интернет-магазине Сыромир в продаже
      </h1>
      <p class="mt-4">
        Что можно взять в “Сыромире” ? Все. В ассортименте буквально все –
        товары для сыроварения – от начальных ингредиентов до профессионального
        оборудования.
      </p>
      <p class="mt-4">
        Ферменты, закваски, плесень, дрожжи, специи – всю продукцию можно купить
        все одним кликом. Здесь вы найдете посуду разных размеров, формы для
        сыра, прессы, термометры и многое другое. Неважно, начинаете ли вы свой
        сыродельный путь или уже считаетесь опытным сыроваром, наша лавка
        обеспечит вас всем необходимым для сыроварения дома. Оформляйте заказ
        онлайн и купите товары для сыроделия на сайте сейчас.
      </p>
      <!-- <div class="mt-4" style="background-image: url('/bg_image.jpg'); background-size: 50%; background-position: center;">
        <h1 class="text-amber-500 text-2xl mt-4">Купить сыр в интернет-магазине Сыромир в Москве</h1>
      </div> -->
    </div>
    <h1 class="text-3xl font-bold mt-4 ml-4">Мягкие сыры без созревания</h1>
    <div class="grid grid-cols-6 gap-2 mt-4">
      <div
        v-for="product in products.slice(0, 12)"
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
    <div class="p-10">
      <h1 class="text-2xl font-bold mb-6">МЫ ПОДОБРАЛИ ДЛЯ ВАС</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          class="bg-white h-64 p-6 rounded-lg shadow-lg flex flex-col justify-between bg-cover bg-center"
          style="background-image: url('/chesee.png')"
        >
          <div>
            <h2 class="text-xl font-bold mt-6 mb-2">
              Более 1000 лучших рецептов
            </h2>
            <p class="text-gray-800">
              Мы собрали для Вас большую базу <br />
              рецептов.
            </p>
          </div>
          <div class="mt-4">
            <button
              class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Перейти
            </button>
          </div>
        </div>

        <div
          class="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between bg-cover bg-center"
          style="background-image: url('/chesee.png')"
        >
          <div>
            <h2 class="text-xl font-bold mt-6 mb-2">Крутые наборы для сыра</h2>
            <p class="text-gray-600">
              Готовые наборы сэкономят время, <br />
              мы всё сделали за Вас.
            </p>
          </div>
          <div class="mt-4">
            <button
              class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Перейти
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
