<template>
  <div>
    <div class="flex gap-10 font-sans text-xxs">
      <MenuSection />
      <div class="mt-4 ml-4 font-sans text-xxs">
        <h1 class="text-3xl font-bold">О нашей компании</h1>
        <div class="flex justify-between mt-6 gap-8">
          <span>
            <h2 class="text-2xl font-bold py-6">Сыроделие</h2>
            <p class="text-gray-700 w-[400px] tracking-wider">
              Одно из самых импортозависимых направлений российского АПК.
              Поэтому производство отечественных сыров высокого качества
              является одним из приоритетных направлений развития молочной
              отрасли. Миссия нашей компании – развивать культуру сыроделия в
              России и стать лидером своей области, достойным высокого доверия
              покупателей, оказывая лучший сервис по стране.
            </p>
          </span>
          <span>
            <NuxtImg class="w-[450px] h-[300px]" src="../public/chesee.png" />
          </span>
        </div>
        <h1 class="text-3xl font-bold mt-8 opacity-60">
          Преимущества работы с нашим магазином
        </h1>
        <div class="flex flex-wrap gap-6 bg-yellow-50 mt-4 ml-4 w-[900px]">
          <div class="p-6 bg-white shadow rounded w-[430px]">
            <div class="text-orange-500 text-3xl">
              <NuxtImg
                class="w-[50px] h-[50px] mb-4"
                src="../public/phone-50.png"
              />
            </div>
            <p class="text-gray-700">
              Профессиональная информационная поддержка, вы можете в любой
              момент связаться с нами
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded w-[430px]">
            <div class="text-orange-500 text-3xl">
              <NuxtImg
                class="w-[50px] h-[50px] mb-4"
                src="../public/protect-80.png"
              />
            </div>
            <p class="text-gray-700">
              Гарантия качества всей продукции, при заказе товара вы можете
              увидеть сертификат
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded w-[430px]">
            <div class="text-orange-500 text-3xl">
              <NuxtImg
                class="w-[50px] h-[50px] mb-4"
                src="../public/web-50.png"
              />
            </div>
            <p class="text-gray-700">
              Программа лояльности, бонусы, акции, лучшие предложения только у
              нас
            </p>
          </div>
          <div class="p-6 bg-white shadow rounded w-[430px]">
            <div class="text-orange-500 text-3xl">
              <NuxtImg
                class="w-[50px] h-[50px] mb-4"
                src="../public/money-64.png"
              />
            </div>
            <p class="text-gray-700">
              Вы покупаете всё в одном месте или оставить запрос и мы привезем
              под заказ
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="font-sans text-xxs opacity-65 mt-12">
      <div class="flex justify-between py-12">
        <div class="w-1/2">
          <h2 class="text-2xl font-bold mb-4">КЛИЕНТ ВСЕГДА ПРАВ</h2>
          <p class="mb-6 w-[450px]">
            Мы стремимся обеспечить обслуживание клиентов таким образом, чтобы
            на всех этапах сотрудничества клиент ощущал комфорт и
            удовлетворение. Наивысшей оценкой нашей деятельности являются
            положительные отзывы о нашей компании.
          </p>
          <button class="bg-orange-500 text-white py-2 px-4 rounded">
            Оставить отзыв
          </button>
        </div>
        <div class="w-1/2">
          <h2 class="text-2xl font-bold mb-4">ЛУЧШИЙ РЕЗУЛЬТАТ</h2>
          <p>
            Наши товары помогут Вам достичь лучших <br />
            результатов.
          </p>
        </div>
      </div>
      <div class="flex mt-4 py-12 gap-10">
        <div class="w-2/4">
          <h2 class="text-3xl font-bold mb-4">О НАШЕМ МАГАЗИНЕ</h2>
          <p class="mb-4">
            Интернет-магазин «Сыромир» предлагает своим покупателям широчайший
            ассортимент оборудования, ингредиентов и аксессуаров для домашнего
            сыроделия.
          </p>
          <p class="mb-4">
            С нашей продукцией у Вас появится возможность приготовить любой сыр
            в домашних условиях и насладиться всеми его оттенками и
            разнообразием, а также Вы окунётесь в мир сыроделия и узнаете всё о
            приготовлении любого вида сыра своими руками.
          </p>
          <p class="mb-4">
            С нашим оборудованием у вас появится возможность расширить свои
            способности, а также приготовить вкусный и качественный сыр.
          </p>
          <p>
            “Сыромир” за качество, надёжность, технологичность и
            презентабельность! Будем и дальше радовать вас большим ассортиментом
            и новинками, а вы нас – своими заказами!
          </p>
        </div>
        <div class="w-2/4 grid grid-cols-2 gap-4">
          <img src="../public/chesee.png" alt="Cheese 1" class="rounded-lg" />
          <img src="../public/chesee.png" alt="Cheese 2" class="rounded-lg" />
          <img src="../public/chesee.png" alt="Cheese 3" class="rounded-lg" />
          <img src="../public/chesee.png" alt="Cheese 4" class="rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>
