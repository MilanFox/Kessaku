<template>
  <button
    class="button"
    :class="[`button--size-${size}`, `button--variant-${variant}`, { 'button--disabled': disabled }]"
    :disabled="disabled"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonSize, ButtonVariant } from './DemoButton.types';

interface Props {
  label: string
  size?: ButtonSize
  variant?: ButtonVariant
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'primary',
  disabled: false,
});
</script>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, opacity 0.15s ease;

  &--size-sm {
    padding: 6px 12px;
    font-size: 12px;
  }

  &--size-md {
    padding: 10px 16px;
    font-size: 14px;
  }

  &--size-lg {
    padding: 14px 20px;
    font-size: 16px;
  }

  &--variant-primary {
    background: #2563eb;
    color: #fff;
  }

  &--variant-secondary {
    background: #e5e7eb;
    color: #111827;
  }

  &--variant-ghost {
    background: transparent;
    color: #2563eb;
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
