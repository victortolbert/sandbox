<script setup>
import Hero from '@/components/Blocks/Hero.vue'
import Resources from '@/components/Blocks/Features.vue'
import TwelveEighty from '@/components/Blocks/1280.vue'
import { useContentStore } from '@/stores/content'
import { useSeo } from '@/composables/seo'

const { getDocuments, documents } = useContentStore()
await getDocuments('home')

const features = [
  documents.tailwind,
  documents.minimalapi,
  documents.ecosystem,
]

useSeo({
  title: 'Welcome!',
  description: 'This is the ASP.NET Minimal API + Vue Starter Kit',
})
</script>

<template>
  <TwelveEighty>
    <section class="text-gray-600 body-font py-24">
      <Hero :doc="documents.hero" />
    </section>
    <section class="text-gray-600 body-font">
      <Resources :items="features" />
    </section>
  </TwelveEighty>
</template>
