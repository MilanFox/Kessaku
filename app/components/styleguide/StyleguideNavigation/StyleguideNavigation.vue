<template>
  <ul
    class="styleguide-navigation"
    :style="{ '--level': level }"
  >
    <li
      v-for="(value, key) in data"
      :key="key"
      :data-level="level"
      :class="{
        'styleguide-navigation__item--group': typeof value !== 'string',
        'styleguide-navigation__item--link': typeof value === 'string',
      }"
    >
      <template v-if="typeof value === 'string'">
        <a
          class="styleguide-navigation__entry styleguide-navigation__entry--link"
          :href="value"
        >
          <span class="styleguide-navigation__entry-icon styleguide-navigation__entry-icon--link" aria-hidden="true" />

          <span class="styleguide-navigation__entry-title">{{ key }}</span>
        </a>
      </template>

      <template v-else>
        <div class="styleguide-navigation__entry styleguide-navigation__entry--group">
          <span class="styleguide-navigation__entry-icon styleguide-navigation__entry-icon--group" aria-hidden="true" />

          <span class="styleguide-navigation__entry-title">{{ key }}</span>
        </div>

        <StyleguideNavigation :data="value" :level="level + 1" />
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TreeNode } from './StyleguideNavigation.types';

const props = defineProps<{ data: TreeNode, level?: number }>();
const level = computed(() => props.level ?? 0);
</script>

<style scoped lang="scss">
.styleguide-navigation {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    padding-left: calc(var(--level, 0) * 18px);
  }

  .styleguide-navigation__entry {
    display: flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 6px;
    font-weight: 600;
    transition: background 0.2s ease;
    gap: 10px;
  }

  .styleguide-navigation__entry-icon {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    flex-shrink: 0;
    background: rgba(59, 130, 246, 0.15);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .styleguide-navigation__entry-icon--link {
    background: rgba(16, 185, 129, 0.2);
  }

  .styleguide-navigation__entry-icon--group {
    background: transparent;
    border-radius: 0;
    position: relative;
  }

  .styleguide-navigation__entry-icon--group::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #4c566a;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
  }

  .styleguide-navigation__entry-title {
    display: inline-flex;
    align-items: baseline;
    font-size: 0.95rem;
  }

  .styleguide-navigation__entry--link {
    text-decoration: none;
    color: #0f172a;
  }

  .styleguide-navigation__entry--link:hover {
    background: rgba(59, 74, 103, 0.08);
  }

  .styleguide-navigation__entry--group {
    color: #4c566a;
  }

  .styleguide-navigation__item--group > .styleguide-navigation {
    margin-top: 4px;
  }

  li[data-level='0'] .styleguide-navigation__entry {
    font-size: 0.82rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }

  li[data-level='1'] .styleguide-navigation__entry {
    font-size: 0.88rem;
    letter-spacing: 0.04em;
    font-weight: 400;
    color: #475569;
    opacity: 0.75;
  }

  li[data-level='2'] .styleguide-navigation__entry {
    font-size: 0.95rem;
    letter-spacing: 0.02em;
  }
}
</style>
