<script lang="ts" setup>
import p from './../../package.json'
import { IApp } from '~/utils/app'
const app = useState<IApp>('app')
</script>

<template>
  <footer class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]">
    <section
      class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"
    >
      <div class="w-full py-4 text-center md:text-left">
        <div class="mb-1">
          {{ app.name }}
        </div>
        
        <a
          class="flex space-x-2 mt-4 justify-center md:justify-start"
          href="mailto:tenna.churiki@gmail.com"
        >
          <div style="width: 19px; height: 19px; font-size:18px">📮</div>
          <div class="text-s dark:text-gray-400">メールでお問合せ</div>
        </a>

        <a
          class="flex space-x-2 mt-4 justify-center md:justify-start"
          href="https://m.me/100018137401246"
        >
          <img style="width: 19px; height: 19px"
                  src="assets/images/messenger.png"
                  alt="icon">
          <div class="text-s dark:text-gray-400">Messengerでお問合せ</div>
        </a>

        <a
          class="flex space-x-2 mt-4 justify-center md:justify-start"
          href="https://coconala.com/users/1899004/careers"
        >
          <img style="width: 19px; height: 19px"
                  src="assets/images/coconala.png"
                  alt="icon">
          <div class="text-s dark:text-gray-400">ココナラからお問合せ</div>
        </a>

      </div>
    </section>
  </footer>
</template>
