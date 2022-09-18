<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.post.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.post.description'),
    },
  ],
}))

var appExamples = [
{
  name: "Pixel Gaka",
  url: "https://apps.apple.com/jp/app/pixel-gaka/id1518469712",
  icon: "assets/images/pixelGaka.png",
  description: "ドット絵が描けるiPad専用アプリ"
},{
  name: "サウナセイカツ",
  url: "https://apps.apple.com/jp/app/サウナセイカツ/id1564730005",
  icon: "assets/images/saunaseikatsu.png",
  description: "サウナの情報共有アプリ"
},{
  name: "本日記",
  url: "https://apps.apple.com/jp/app/本日記/id1634382833",
  icon: "assets/images/readbook.png",
  description: "読んだ本を記録するアプリ"
},{
  name: "ChickenGarden（ニワトリの庭）",
  url: "https://apps.apple.com/jp/app/ニワトリの庭/id1511127911",
  icon: "assets/images/chickengarden.png",
  description: "ニワトリの庭を育てるめざましアプリ"
},{
  name: "Iroasobi",
  url: "https://apps.apple.com/jp/app/iroasobi/id1641073175",
  icon: "assets/images/iroasobi.png",
  description: "カラーピッカーや、色を使ったゲームが楽しめる有料アプリ"
}]
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.post.title')" class="capitalize" />
    </PageHeader>
    <PageBody>

      <PageSection v-for="article in appExamples" :key="article._path">
          <div
            class="block hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]"
          >
            <div class="mt-1 text-slate-600 dark:text-gray-400 text-right">
              
              <Anchor
                class="text-sm flex items-center justify-end space-x-1"
                :href="`${article.url}`"
              >
          <img
          style="width: 80px; border-radius: 24%; margin: 10px;"
            :src="`${article.icon}`"
            alt="icon">
          <!--<Gem class="absolute -top-64 -right-0" />-->
            
              </Anchor>
            </div>
            <div class="flex flex-col">
              <div
                class="text-xl font-semibold text-slate-800 dark:text-gray-50"
              >
                {{ article.name }}
              </div>
              <div class="text-slate-700 dark:text-gray-300 mb-1">
                {{ article.description }}
              </div>
              <div class="flex">
                <Anchor
                  class="text-sm flex space-x-1 items-center text-primary-500"
                  :to="article.url"
                >
                  <span>{{ $t('others.learn_more') }}</span>
                  <icon:ic:baseline-arrow-right-alt class="text-sm" />
                </Anchor>
              </div>
            </div>
          </div>
        </PageSection>

    </PageBody>
  </PageWrapper>
</template>
