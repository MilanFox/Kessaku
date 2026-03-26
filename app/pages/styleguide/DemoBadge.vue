<template>
  <div>
    <h1>DemoBadge - Basic</h1>

    <Playground
      title="Badge playground"
      :component="DemoBadge"
      :fields="fields"
      :defaults="defaults"
    />
  </div>
</template>

<script setup lang="ts">
import type { PlaygroundFieldType } from '@components/styleguide/PlaygroundField/PlaygroundField.types';
import { BADGE_TONES } from '@atoms/DemoBadge/DemoBadge.types';
import DemoBadge from '@atoms/DemoBadge/DemoBadge.vue';

const fields: Record<string, PlaygroundFieldType> = {
  label: { type: 'text' },
  tone: { type: 'select', options: [...BADGE_TONES] },
  pill: { type: 'boolean' },
};

const defaults = {
  label: 'Demo badge',
  tone: 'neutral',
  pill: false,
};
</script>
