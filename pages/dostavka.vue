<script setup lang="ts">
import { ref } from "vue";
const zoom = ref(14);
</script>

<template>
  <div>
    <div class="flex gap-10 font-sans text-sm">
      <MenuSection />
      <div class="mt-4">
        <h1 class="text-3xl mb-6">Доставка и оплата</h1>
        <div class="flex items-center gap-6 border-b pb-6">
          <div class="bg-white w-[300px] py-6 px-6 rounded-lg border">
            <NuxtImg
              class="w-16 h-16 bg-yellow-500 p-4 rounded-full"
              src="/paymit3.png"
            />
            <div>
              <h1 class="text-xl font-semibold mb-2 py-4">
                Предоплата по счету
              </h1>
              <p class="text-gray-700">
                При оформлении заказа выберите в поле оплаты "счёт для
                юридических лиц" и введите реквизиты. Счет на оплату будет
                выслан на электронную почту.
              </p>
            </div>
          </div>
          <div class="bg-white w-[300px] py-6 px-6 rounded-lg border">
            <NuxtImg
              class="w-16 h-16 bg-yellow-500 p-4 rounded-full"
              src="/paymit3.png"
            />
            <div>
              <h1 class="text-xl font-semibold mb-2 py-4">
                Предоплата по счету
              </h1>
              <p class="text-gray-700">
                При оформлении заказа выберите в поле оплаты "счёт для
                юридических лиц" и введите реквизиты. Счет на оплату будет
                выслан на электронную почту.
              </p>
            </div>
          </div>
          <div class="bg-white w-[300px] py-6 px-6 rounded-lg border">
            <NuxtImg
              class="w-16 h-16 bg-yellow-500 p-4 rounded-full"
              src="/paymit3.png"
            />
            <div>
              <h1 class="text-xl font-semibold mb-2 py-4">
                Предоплата по счету
              </h1>
              <p class="text-gray-700">
                При оформлении заказа выберите в поле оплаты "счёт для
                юридических лиц" и введите реквизиты. Счет на оплату будет
                выслан на электронную почту.
              </p>
            </div>
          </div>
        </div>
        <div class="flex gap-6">
          <span class="opacity-55">
            <h1 class="text-3xl mb-6 opacity-45">Способы Доставки:</h1>
            <h1 class="text-3xl mb-6">Доставка по Москве</h1>
            <p class="w-96 tracking-wider">
              Вы можете забрать товар из нашего магазина самостоятельно, приехав
              по адресу: <br />
              <b class="text-yellow-500">г. Москва, ул. Угрешская 12с4</b>
            </p>
            <p class="w-80 py-4 tracking-wider">
              Или заказать курьерскую доставку. Стоимость доставки –
              <b class="text-yellow-500">от 150 рублей.</b>
            </p>
          </span>
          <span>
            <div style="height: 35vh; width: 31vw">
              <LMap
                ref="map"
                :zoom="zoom"
                :center="[55.71343, 37.69922]"
                :use-global-leaflet="false"
              >
                <LTileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="Ugreshskaya Ulitsa, 12с4, Moskva, <br> Russia, 115088 "
                  layer-type="base"
                  name="OpenStreetMap"
                />
              </LMap>
            </div>
          </span>
        </div>
        <div class="flex gap-6 mt-8">
          <span>
            <NuxtImg class="w-[400px]" src="/dastovka_img.png" />
          </span>
          <span>
            <h1 class="text-3xl mb-6">Доставка по России</h1>
            <p class="w-96 leading-relaxed tracking-wider">
              Доставка по РФ осуществляется логистическими службами СДЭК и Почта
              России.
            </p>
            <p class="w-[500px] py-4 tracking-wider leading-relaxed">
              В любой момент Вы можете отследить путь своего заказа по
              трек-номеру. Приблизительные сроки и стоимость доставки указаны в
              таблице ниже. Окончательная сумма зависит от веса и способа оплаты
              заказа (при наложенном платеже – стоимость доставки выше) и
              рассчитывается автоматически в момент оформления.
            </p>
          </span>
        </div>
      </div>
    </div>
    <div class="mt-4 w-full mb-6 font-sans text-sm">
      <table class="table-auto border-collapse border border-gray-200 w-full">
        <thead>
          <tr class="bg-yellow-600">
            <th class="border px-4 py-2"></th>
            <th class="border px-4 py-2">Почта России</th>
            <th class="border px-4 py-2">Транпортная компания СДЭК</th>
            <th class="border px-4 py-2">Пункт выдачи Boxberry</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-yellow-200">
            <td class="border px-4 py-2">Сроки доставки</td>
            <td class="border px-4 py-2">От 7 дней</td>
            <td class="border px-4 py-2">2-4 дня</td>
            <td class="border px-4 py-2">2-4 дня</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Стоимость доставки</td>
            <td class="border px-4 py-2">От 200 руб.</td>
            <td class="border px-4 py-2 w-80">
              От 350 руб. Итоговая сумма будет рассчитана после указания точного
              адреса
            </td>
            <td class="border px-4 py-2">От 200 руб.</td>
          </tr>
          <tr class="bg-yellow-200">
            <td class="border px-4 py-2">Бесплатная доставка</td>
            <td class="border px-4 py-2">При заказе от 2000 руб.</td>
            <td class="border px-4 py-2">При заказе от 7000 руб.</td>
            <td class="border px-4 py-2">При заказе от 2000 руб.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
