<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
const route = useRoute();
const slug = (route.params.slug as string[]).join('/');
const story = await useStoryblok(slug, { version: 'published' });
</script>
