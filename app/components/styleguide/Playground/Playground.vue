<template>
  <div class="playground">
    <h2 class="playground__title">
      {{ title }}
    </h2>

    <div class="playground__content">
      <fieldset class="playground__controls" aria-label="Controls">
        <div class="playground__controls-heading">Controls</div>

        <PlaygroundField
          v-for="(field, label) in fields"
          :key="label"
          v-model="state[label]"
          :label="label"
          :field="field"
        />
      </fieldset>

      <div class="playground__preview">
        <component
          :is="component"
          v-bind="state"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import type { PlaygroundFieldType } from '../PlaygroundField/PlaygroundField.types';

import { reactive } from 'vue';

const props = defineProps<{
  title: string
  component: Component
  fields: Record<string, PlaygroundFieldType>
  defaults: Record<string, unknown>
}>();

const state = reactive({ ...(props.defaults || {}) });
</script>

<style scoped lang="scss">
.playground {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.12);
  box-shadow: 0 30px 50px rgba(15, 23, 42, 0.08);

  &__title {
    margin: 0;
    font-size: 1.95rem;
    font-weight: 600;
    color: #111827;
  }

  &__content {
    display: grid;
    grid-template-columns: clamp(240px, 30%, 320px) 1fr;
    gap: 32px;
  }

  &__controls {
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 4px;
    background: #f2f4ff;
    padding: 26px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0;
  }

  &__controls-heading {
    font-size: 0.85rem;
    letter-spacing: 0.18em;
    color: #4c5175;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
  }

  &__preview {
    border-radius: 4px;
    padding: 32px;
    background: #fcfdff;
    border: 1px solid rgba(99, 102, 241, 0.15);
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35),
      0 20px 45px rgba(15, 23, 42, 0.12);
    align-self: stretch;
  }

 @media (max-width: 880px) {
   &__content {
     grid-template-columns: 1fr;
   }

   &__preview {
     padding: 24px;
   }
  }
}

.playground + .playground {
  margin-top: 28px;
}
</style>
