<template>
  <div>
    <h1>Header</h1>

    <Playground
      title="Badge playground"
      :component="Header"
      :fields="fields"
      :defaults="defaults"
    />
  </div>
</template>

<script setup lang="ts">
import type { PlaygroundFieldType } from '@components/styleguide/PlaygroundField/PlaygroundField.types';
import Header from '@organisms/Header/Header.vue';

const fields: Record<string, PlaygroundFieldType> = {};
const defaults = {};
</script>
