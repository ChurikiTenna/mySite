<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})

// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 0,
  },
  {
    text: titlesText.value[1],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 2,
  },
])
const tooltip = ref(false)

</script>

<template>
  <div class="default-layout">
  <PageWrapper class="flex-1 flex">
    <!--<div class="background-overlay">
      <div
        class="absolute top-0 left-0 transform translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"
      ></div>
      <div
        class="absolute hidden md:block top-0 left-0 transform translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"
      ></div>
      <div
        class="absolute hidden md:block bottom-0 right-0 transform -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-600 linear-wipe"
      ></div>
      <div class="absolute bottom-0 right-0 triangle-shape"></div>
    </div>-->
    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex items-center">
        <div class="flex-1 md:w-2/3 flex flex-col z-10">
          <h1 class="text-center md:text-left">
            <span
              v-for="(item, i) in leadingsText"
              :key="i"
              :style="`--content: '${item.text}'; --start-color: ${
                item.startColor
              }; --end-color: ${item.endColor}; --animation-name: anim-fg-${
                i + 1
              }`"
              class="animated-text-bg drop-shadow-xl text-5xl block font-black uppercase"
            >
              <span class="animated-text-fg">{{ item.text }}</span>
            </span>

            <span
              class="text-2xl block font-black uppercase"
            >
              <span><br>iOSアプリ開発<br>Andoirdアプリ開発<br>Webアプリ開発</span>
            </span>
            <span
              class="text-1xl block font-black uppercase"
            >
              <span><br>作りたいアプリのイメージが固まっていなくても大丈夫です！大体の費用が知りたいなどでも、お気軽にご相談ください。</span>
            </span>
          </h1>
          <div
            class="flex space-x-4 ml-4 mt-10 justify-center md:justify-start"
          >
            <Button
              size="lg"
              text="📮 メールでお問合せ"
              class="font-extrabold"
              href="mailto:tenna.churiki@gmail.com"
            />
            <Button
              size="lg"
              text="Messengerでお問合せ"
              type="secondary"
              class="font-extrabold"
              href="https://m.me/100018137401246"
            />
          </div>
        </div>
        <div class="hidden md:flex flex-1 justify-center items-end relative">
          <img class="fit-picture"
          style="padding: 20%; border-radius: 50%"
            src="https://firebasestorage.googleapis.com/v0/b/churiki-tenna.appspot.com/o/280031172_1048686382412599_7960801700504288944_n.jpg?alt=media&token=05ed5a80-0f59-4c56-9721-db1c42c6c620"
            alt="icon">
        </div>
        
      </PageSection>
      
    </PageBody>
    
  </PageWrapper>
  <PageWrapper class="flex-1 flex">
    
    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex items-center">

        <div class="hidden md:flex flex-1 justify-center items-end relative">
          <TennaAnimation></TennaAnimation>
        </div>
        
        <div class="flex-1 md:w-2/3 flex flex-col z-10">
          <h1 class="text-center md:text-left">
            
            <span
              class="text-2xl block font-black uppercase"
            >
              <span>自己紹介</span>
            </span>
            <span
              class="text-1xl block font-black uppercase"
            >
              <span><br>生年月日：1999/03/09</span>
              <span><br>出身地：沖縄県</span>
              <span><br>現住地：東京都</span>

              <span><br><br>学歴<br>沖縄県立開邦高等学校　芸術科美術コース<br>シドニー工科大学　バイオメディカルサイエンス学科卒</span>
              <span><br><br>職歴<br>2020年~ アプリ開発エンジニア（フリーランス）</span>

            </span>
            <span
              class="text-1xl"
            >
              <span><br><br>フリーランスを始めてから２０個以上のiOSアプリ開発に関わらせていただきました。
                <br>ほとんどのアプリはデザイン、開発、公開まで全て1人で行っております。チームでの開発経験もあります。
                <br>ありがたいことに個人のお客さまから企業様まで、幅広いお客様にご好評をいただいています。
                <br>2022年からは、AndroidとWebアプリもいくつか制作しています。
                <br>実家で鶏を飼っているので、好きな動物は鶏です。
              </span>
            </span>
          </h1>
          <div
            class="flex space-x-4 ml-4 mt-10 justify-center md:justify-start"
          >
          </div>
        </div>
      </PageSection>
      
    </PageBody>
    
  </PageWrapper>

</div>
</template>

<style lang="scss">
@import '../assets/sass/variables';

@keyframes anim-fg-1 {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }

  33.333%,
  83.333% {
    opacity: 0;
  }
}

@keyframes anim-fg-2 {
  0%,
  16.667%,
  66.667%,
  100% {
    opacity: 0;
  }

  33.333%,
  50% {
    opacity: 1;
  }
}

@keyframes anim-fg-3 {
  0%,
  50%,
  100% {
    opacity: 0;
  }

  66.667%,
  83.333% {
    opacity: 1;
  }
}

.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  color: theme('colors.slate.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: $padding;
  padding-right: $padding;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    color: theme('colors.slate.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: $padding;
    padding-right: $padding;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: $padding;
  padding-right: $padding;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: var(--animation-name) 8s infinite;
}

html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
    }
  }
}

.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
