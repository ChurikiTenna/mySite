<script lang="ts" setup>
  import { capitalize } from '~/utils/str'
  
  // composable
  const { t } = useLang()
  const appName = "minesew"
  // compiler macro
  definePageMeta({
    layout: 'page',
  })
  useHead(() => ({
    title: capitalize(appName+" | 利用規約"),
    meta: [
      {
        name: 'description',
        content: appName+'の利用規約ページです',
      },
    ],
  }))
  </script>
  
  <template>
    <PageWrapper>
      <PageHeader>
        <PageTitle :text="appName" class="capitalize" />
      </PageHeader>
      <PageBody>
        <PageSection>
          Text
        </PageSection>
      </PageBody>
    </PageWrapper>
  </template>