<script lang="ts" setup>
  import { capitalize } from '~/utils/str'
  
  // composable
  const { t } = useLang()
  const pageName = "minesew"
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
                  src="https://firebasestorage.googleapis.com/v0/b/churiki-tenna.appspot.com/o/minesew.png?alt=media&token=881e9b0f-281e-4bb1-b1d4-15f2f20f5d1d"
                  alt="icon">
              </div>
              <div class="flex flex-col">
                
                <div class="text-slate-700 dark:text-gray-100 mb-2">
                  自分の作ったものをシェアするコミュニティです。
                  <br>投稿、いいね、コメント機能のみのシンプルなアプリです。
                </div>

                <div class="text-slate-700 dark:text-gray-300 mb-2" style="font-size: 14px">
                  iOSアプリ
                </div>
                <div class="flex">
                  <Anchor
                    class="text-sm flex space-x-1 items-center text-primary-500"
                    to="https://apps.apple.com/us/app/minesew/id1645837979"
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
  