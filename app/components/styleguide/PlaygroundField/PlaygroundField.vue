<template>
  <label class="playground-field">
    <span class="playground-field__label">{{ label }}</span>

    <input v-if="field.type === 'text'" v-model="state" type="text" />

    <input v-if="field.type === 'number'" v-model.number="state" type="number" />

    <input v-if="field.type === 'boolean'" v-model="state" type="checkbox" />

    <select v-if="field.type === 'select'" v-model="state">
      <option v-for="opt in field.options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
  </label>
</template>

<script setup lang="ts">
import type { PlaygroundFieldType } from './PlaygroundField.types';

defineProps<{ label: string, field: PlaygroundFieldType }>();

const state = defineModel<unknown>();
</script>

<style scoped lang="scss">
.playground-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #1f2a37;

  &__label {
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #5b6476;
  }

  input[type='text'],
  input[type='number'],
  input[type='checkbox'],
  select {
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba(15, 23, 42, 0.1);
    padding: 10px 12px;
    font-size: 0.95rem;
    background: #ffffff;

    &:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
      outline: none;
    }
  }

  select {
    appearance: none;
    background-image:
      linear-gradient(45deg, transparent 50%, #1f2a37 50%),
      linear-gradient(135deg, #1f2a37 50%, transparent 50%);
    background-position: calc(100% - 20px) 50%, calc(100% - 14px) 50%;
    background-size: 6px 6px;
    background-repeat: no-repeat;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
}
</style>
