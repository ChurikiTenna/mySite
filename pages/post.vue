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
    icon: "https://firebasestorage.googleapis.com/v0/b/churiki-tenna.appspot.com/o/pixelGaka.png?alt=media&token=bcfebcd0-d224-456c-b5c0-c5af84367a41",
    description: "ドット絵が描けるiPad専用アプリ"
  },{
    name: "Order-S",
    url: "https://apps.apple.com/jp/app/order-s/id1641628209",
    icon: "https://firebasestorage.googleapis.com/v0/b/churiki-tenna.appspot.com/o/orders.png?alt=media&token=18f41a47-564b-454b-88ba-553cf871245f",
    description: "飲食店業務サポート。注文、お会計までこれひとつ！"
  },{
    name: "サウナセイカツ",
    url: "https://apps.apple.com/jp/app/サウナセイカツ/id1564730005",
    icon: "https://firebasestorage.googleapis.com/v0/b/churiki-tenna.appspot.com/o/saunaseikatsu.png?alt=media&token=30fe1b0c-54e1-4494-aa7c-49f556f596e0",
    description: "サウナの情報共有アプリ"
  },{
    name: "本日記",
    url: "https://apps.apple.com/jp/app/本日記/id1634382833",
    icon: "https://firebasestorage.googleapis.com/v0/b/churiki-tenna.appspot.com/o/readbook.png?alt=media&token=af850e3b-d90d-4f8a-90cb-8889ef750ff6",
    description: "読んだ本を記録するアプリ"
  },{
    name: "ChickenGarden（ニワトリの庭）",
    url: "https://apps.apple.com/jp/app/ニワトリの庭/id1511127911",
    icon: "https://firebasestorage.googleapis.com/v0/b/churiki-tenna.appspot.com/o/chickengarden.png?alt=media&token=6dfca729-df17-45f3-8516-4090ebc90f6b",
    description: "ニワトリの庭を育てるめざましアプリ"
  },{
    name: "Iroasobi",
    url: "https://apps.apple.com/jp/app/iroasobi/id1641073175",
    icon: "https://firebasestorage.googleapis.com/v0/b/churiki-tenna.appspot.com/o/iroasobi.png?alt=media&token=cb5aea27-0884-4df3-99da-eb1b7d49ebab",
    description: "カラーピッカーや、色を使ったゲームが楽しめる有料アプリ"
  }]
  console.log("did.appExamples")
  </script>
  
  <template>
    <PageWrapper>
      <PageHeader>
        <PageTitle :text="$t('pages.post.title')" class="capitalize" />
      </PageHeader>
      <PageBody>
        <ContentList>
        <PageSection v-for="article in appExamples" :key="article.name">
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
        </ContentList>
        <Button
            style="margin-left: 20%; margin-right: 20%;"
            size="lg"
            text="📱 AppStoreでもっと見る"
            class="font-extrabold"
            href="https://apps.apple.com/jp/developer/tenna-churiki/id1501272326"
          />
      </PageBody>
    </PageWrapper>
  </template>
  