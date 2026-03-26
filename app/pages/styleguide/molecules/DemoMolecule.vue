<template>
  <div>
    <h1>DemoMolecule</h1>

    <Playground
      title="Molecule playground"
      :component="DemoMolecule"
      :fields="fields"
      :defaults="defaults"
    />
  </div>
</template>

<script setup lang="ts">
import type { PlaygroundFieldType } from '@components/styleguide/PlaygroundField/PlaygroundField.types';
import { BADGE_TONES } from '@atoms/DemoBadge/DemoBadge.types';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@atoms/DemoButton/DemoButton.types';
import DemoMolecule from '@molecules/DemoMolecule/DemoMolecule.vue';

const fields: Record<string, PlaygroundFieldType> = {
  title: { type: 'text' },
  description: { type: 'text' },
  badgeLabel: { type: 'text' },
  badgeTone: { type: 'select', options: [...BADGE_TONES] },
  badgePill: { type: 'boolean' },
  buttonLabel: { type: 'text' },
  buttonSize: { type: 'select', options: [...BUTTON_SIZES] },
  buttonVariant: { type: 'select', options: [...BUTTON_VARIANTS] },
  buttonDisabled: { type: 'boolean' },
};

const defaults = {
  title: 'Summer collection',
  description: 'Playful everyday pieces designed for comfort and movement.',
  badgeLabel: 'Featured',
  badgeTone: 'success',
  badgePill: true,
  buttonLabel: 'Shop now',
  buttonSize: 'md',
  buttonVariant: 'primary',
  buttonDisabled: false,
};
</script>
