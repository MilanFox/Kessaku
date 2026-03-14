<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="nestedBlok in blok.body"
      :key="nestedBlok._uid"
      :blok="nestedBlok"
    />
  </div>
</template>

<script setup lang="ts">
import type { StoryblokPageProps } from './StoryblokPage.types';

defineProps<StoryblokPageProps>();
</script>
