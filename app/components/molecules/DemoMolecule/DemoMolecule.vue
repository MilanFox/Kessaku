<template>
  <article class="demo-molecule">
    <header class="demo-molecule__header">
      <DemoBadge
        :label="badgeLabel"
        :tone="badgeTone"
        :pill="badgePill"
      />

      <h3 class="demo-molecule__title">
        {{ title }}
      </h3>

      <p class="demo-molecule__description">
        {{ description }}
      </p>
    </header>

    <div class="demo-molecule__actions">
      <DemoButton
        :label="buttonLabel"
        :size="buttonSize"
        :variant="buttonVariant"
        :disabled="buttonDisabled"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import DemoBadge from '@atoms/DemoBadge/DemoBadge.vue';
import DemoButton from '@atoms/DemoButton/DemoButton.vue';
import type { DemoMoleculeProps } from './DemoMolecule.types';

withDefaults(defineProps<DemoMoleculeProps>(), {
  title: 'Demo Molecule',
  description: 'A combined component built from DemoBadge and DemoButton.',
  badgeLabel: 'New',
  badgeTone: 'neutral',
  badgePill: false,
  buttonLabel: 'Learn more',
  buttonSize: 'md',
  buttonVariant: 'primary',
  buttonDisabled: false,
});
</script>

<style scoped lang="scss">
.demo-molecule {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 420px;
  padding: 20px;
  border: 1px solid #d8dee9;
  border-radius: 12px;
  background: #ffffff;
  color: #111827;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);

  &__header {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
  }

  &__description {
    margin: 0;
    color: #4b5563;
    line-height: 1.45;
  }

  &__actions {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
