<template>
  <span
    class="badge"
    :class="[`badge--tone-${tone}`, { 'badge--pill': pill }]"
  >
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger';

interface Props {
  label?: string
  tone?: BadgeTone
  pill?: boolean
}

withDefaults(defineProps<Props>(), {
  label: 'Badge',
  tone: 'neutral',
  pill: false,
});
</script>

<style lang="scss" scoped>
.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 12px;
  border: 1px solid #d1d5db;
  background: #e5e7eb;
  color: #111827;
  text-transform: uppercase;
  letter-spacing: 0.02em;

  &--tone-success {
    background: #ecfdf3;
    color: #065f46;
    border-color: #bbf7d0;
  }

  &--tone-warning {
    background: #fffbeb;
    color: #92400e;
    border-color: #fcd34d;
  }

  &--tone-danger {
    background: #fef2f2;
    color: #991b1b;
    border-color: #fecdd3;
  }

  &--pill {
    border-radius: 9999px;
  }
}
</style>
