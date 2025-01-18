<template>
  <div
    class="m-5 flex justify-between gap-2 font-sans text-md font-thin text-gray-700 pb-10"
  >
    <div>
      <NuxtImg class="w-[200px]" src="/chess_market.png" />
      <p class="mt-2 w-72">Все материалы данного сайта являются объектами авторского права.</p>
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-xl font-bold">Компания</h1>
      <NuxtLink to="">Каталог</NuxtLink>
      <NuxtLink to="">О компании</NuxtLink>  
      <NuxtLink to="">Доставка и оплата</NuxtLink>
      <NuxtLink to="">Отзывы</NuxtLink>
      <NuxtLink to="">Калькулятор Сыродела</NuxtLink>
      <NuxtLink to="">Условия соглашения</NuxtLink>
      <NuxtLink to="">Гарантия и возврат</NuxtLink>
      <NuxtLink to="">Избранное</NuxtLink>
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-xl font-bold">Поддержка</h1>
      <NuxtLink to="">Вопросы и ответы</NuxtLink>
      <NuxtLink to="">Политика конфиденциальности</NuxtLink>  
      <NuxtLink to="">Обработка персональных данных</NuxtLink>
    </div>
    <div class="flex flex-col gap-2">
      <h1 class="text-xl font-bold">Способы оплаты</h1>
      <NuxtImg src="/visa.png" />
      <NuxtImg src="/mastercard.png" />
      <NuxtImg src="/maestro.png" />
      <NuxtImg src="/unionpay.png" />
      <NuxtImg src="/maestro.png" />
    </div>
  </div>
</template>
