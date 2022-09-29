<script lang="ts" setup>
  import { capitalize } from '~/utils/str'
  
  // composable
  const { t } = useLang()
  const pageName = "Papern"
  const privacyPolicyUrl = "privacyPolicy"
  const termOfUseUrl = "termOfUse"
  // compiler macro
  definePageMeta({
    layout: 'page',
  })
  useHead(() => ({
    title: capitalize(pageName),
    meta: [
      {
        name: 'description',
        content: pageName+'についてのページです',
      },
    ],
  }))
  </script>
  
  <template>
    <PageWrapper>
      <PageHeader>
        <PageTitle :text="pageName" class="capitalize" />
      </PageHeader>
      <PageBody>
        <PageSection>
          
            <div class="block hover:no-underline p-6 flex space-x-6">
              <div class="mt-1 text-slate-600 dark:text-gray-400 text-right">
                <img
                  style="width: 100px; border-radius: 24%"
                  src="https://firebasestorage.googleapis.com/v0/b/churiki-tenna.appspot.com/o/papern.png?alt=media&token=c1907ded-77b0-4f7d-8890-3292ad535747"
                  alt="icon">
              </div>
              <div class="flex flex-col">
                
                <div class="text-slate-700 dark:text-gray-100 mb-2">
                  <br>毎日論文が読めるアプリです。
                  <br>
                  <br>・毎日決まったトピックの論文がランダムに表示され、色々なカテゴリの論文を読むことができます（外部リンク）。
                  <br>・自分の研究成果をアマチュア論文として投稿することができます。
                  <br>・ユーザーの研究成果は「みんなの研究成果」から読むことができます。
                  <br>・読んだ論文、読みたい論文をストックできます。
                  <br>・お気に入りのユーザーをフォローして、その人がどんな論文を読んでいるか確認できます。
                </div>

                <div class="text-slate-700 dark:text-gray-300 mb-2" style="font-size: 14px">
                  iOSアプリ
                </div>
                <div class="flex">
                  <Anchor
                    class="text-sm flex space-x-1 items-center text-primary-500"
                    to="https://apps.apple.com/us/app/papern/id6443482521"
                  >
                    <span>{{ $t('others.learn_more') }}</span>
                    <icon:ic:baseline-arrow-right-alt class="text-sm" />
                  </Anchor>
                </div>
              </div>
            </div>
            <center>
              <Anchor
                  :to="privacyPolicyUrl"
                  class="flex-1 hover:no-underline"
                  style="padding: 10px"
                  >・プライバシーポリシー</Anchor
                >
            <Anchor
                  :to="termOfUseUrl"
                  class="flex-1 hover:no-underline"
                  style="padding: 10px"
                  >・利用規約</Anchor
                >
            </center>
            
        </PageSection>
      </PageBody>
    </PageWrapper>
  </template>
  