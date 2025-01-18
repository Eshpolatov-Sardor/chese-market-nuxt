<script setup lang="ts">
import { ref } from "vue";

const dropdowns = ref([
  {
    title: "Закваски для сыра",
    isVisible: false,
    options: ["Мезофильные закваски для сыра", "Термофильные закваски", "Мезо-термофильные закваски для сыра","Ароматообразующие закваски для сыра","Защитные закваски для сыра","Вспомогательные закваски для сыра","Закваски для мягких и молодых сыров","Закваски для полутвердых сыров"],
  },
  {
    title: "Кисломолочные закваски",
    isVisible: false,
    options: ["Закваски для йогурта", "Закваски для кефира", "Закваски для сметаны", "Закваска для ряженки"],
  },
  {
    title: "Ферменты для сыра",
    isVisible: false,
    options: ["Жидкие ферменты", "Сухие ферменты", "Липаза", "Клеризим"],
  },
  {
    title: "Плесень и дрожжи для сыров",
    isVisible: false,
    options: ["Белая плесень для сыра", "Голубая плесень для сыра", "Дрожжи для сыра","Плесени Danisco","Плесени Chr. Hansen","Плесени MicroMilk","Плесени Sacco","Плесени Углич"],
  },
]);

function toggleDropdown(index: number) {
  dropdowns.value[index].isVisible = !dropdowns.value[index].isVisible;
}
</script>

<template>
  <div class="flex flex-col w-[300px] bg-white font-sans text-xxs">
    <div
      class="border-b py-2 rounded-sm flex gap-2 bg-[#FBE8BB] text-black items-center px-2 mt-2"
    >
      <NuxtImg
        class="w-[20px] h-[20px]"
        src="/cheese 1.png"
        alt="Logo"
      />
      <NuxtLInk to="">Ингредиенты</NuxtLInk>
    </div>
    <main v-for="(dropdown, index) in dropdowns" :key="index">
      <div class="flex items-center justify-between border-b py-1 cursor-pointer " @click.prevent="toggleDropdown(index)">
        <NuxtLink
          to=""
          class="text-md text-black hover:text-yellow-800 transition px-2 py-2"
        >
          {{ dropdown.title }}
        </NuxtLink>
        <NuxtImg
          :src="
            dropdown.isVisible
              ? '/down-arrow.png'
              : '/right-arrow-angle.png'
          "
          alt="Arrow Icon"
          class="w-4 h-4 transform transition-transform"
          :class="dropdown.isVisible ? 'rotate-180' : ''"
        />
      </div>
      <div
        v-if="dropdown.isVisible"
        class="mt-2 bg-white border rounded shadow-lg"
      >
        <NuxtLink
          v-for="(option, i) in dropdown.options"
          :key="i"
          class="block px-4 py-2 text-gray-700 hover:bg-yellow-800 hover:text-white transition"
          to=""
        >
          {{ option }}
        </NuxtLink>
      </div>
    </main>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Специи для сыра</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Хлористый кальций</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer mb-6"
    >
      <NuxtLInk to="">Дополнительные ингредиенты</NuxtLInk>
    </div>
    <div
      class="border-b py-2 rounded-sm flex gap-2 bg-[#FBE8BB] text-black items-center px-2 mt-2"
    >
      <NuxtImg
        class="w-[20px] h-[20px]"
        src="/cheese 1.png"
        alt="Logo"
      />
      <NuxtLInk to="">Оборудование</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Формы для сыра</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Посуда и аксессуары</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Инвентарь</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Воск для сыра</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Латексное покрытие</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Дренажное оборудование</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Весы и мерная посуда</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Термометры для молока</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="">Прессы для сыра</NuxtLInk>
    </div>
    <div
      class="border-b py-2 px-2 hover:bg-yellow-200 hover:text-black cursor-pointer"
    >
      <NuxtLInk to="/oborudovanie">Дополнительное оборудование</NuxtLInk>
    </div>
    <div
      class="border-b py-2 rounded-sm flex gap-2 bg-[#FBE8BB] text-black items-center px-2 mt-2"
    >
      <NuxtLInk to="/nabory">Наборы для Сыроделия</NuxtLInk>
    </div>
  </div>
</template>
