<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
const slugPath = [slug].flat().join('/') || 'home';
const story = await useStoryblok(slugPath, { version: 'published' });
</script>
