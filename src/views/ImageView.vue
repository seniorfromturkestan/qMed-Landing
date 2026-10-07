<script setup lang="ts">
import { useHead } from '@unhead/vue'

const props = defineProps<{
  imageSrc: string
  imageAlt: string
  pageTitle: string
}>()

useHead({
  title: props.pageTitle,
  meta: [
    {
      name: 'description',
      content: props.imageAlt,
    },
  ],
})
</script>

<template>
  <section class="bg-white px-4 py-6 sm:px-6 sm:py-10">
    <div class="mx-auto max-w-[1491px]">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="block h-auto w-full object-contain"
      />
    </div>
  </section>
</template>
