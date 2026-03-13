<template>
  <div>
    <h1>DemoButton - Secondary</h1>

    <Playground
      v-for="[title, props] in variants"
      :key="title"
      :title="title"
      :component="DemoButton"
      :fields="fields"
      :defaults="props"
    />
  </div>
</template>

<script setup lang="ts">
import type { PlaygroundFieldType } from '@components/styleguide/PlaygroundField/PlaygroundField.types';
import DemoButton from '@atoms/DemoButton/DemoButton.vue';

const fields: Record<string, PlaygroundFieldType> = {
  label: { type: 'text' },
  size: { type: 'select', options: ['sm', 'md', 'lg'] },
  disabled: { type: 'boolean' },
};

const variants: [string, Record<string, unknown>][] = [
  ['Small', { label: 'Click me', size: 'sm', variant: 'secondary' }],
  ['Medium', { label: 'Click me', size: 'md', variant: 'secondary' }],
  ['Large', { label: 'Click me', size: 'lg', variant: 'secondary' }],
];
</script>
