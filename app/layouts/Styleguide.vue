<template>
  <div class="demo-page">
    <nav class="demo-page__navigation">
      <header class="demo-page__navigation-header">
        <p class="demo-page__navigation-label">Styleguide</p>

        <h1 class="demo-page__navigation-title">
          Components
        </h1>

        <p class="demo-page__navigation-subtitle">
          Explore every atomic piece of the UI along with adjustable props.
        </p>
      </header>

      <div class="demo-page__navigation-tree">
        <StyleguideNavigation :data="demoRoutes" />
      </div>
    </nav>

    <main class="demo-page__content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@config/routes';
import type { TreeNode } from '@components/styleguide/StyleguideNavigation/StyleguideNavigation.types';

const demoRoutes = useRouter()
  .getRoutes()
  .sort((a, b) => a.path.localeCompare(b.path))
  .reduce((tree, route) => {
    if (!route.path.startsWith(`${routes.STYLEGUIDE}/`)) return tree;

    const parts = route.path.split('/').slice(2);

    let currentNode: TreeNode = tree;
    parts.forEach((part, i) => {
      if (i === parts.length - 1) {
        currentNode[part] = route.path;
      }
      else {
        currentNode[part] ??= {};
        currentNode = currentNode[part] as TreeNode;
      }
    });

    return tree;
  }, {});
</script>

<style lang="scss">
.demo-page {
  display: grid;
  grid-template-columns: minmax(260px, 300px) 1fr;
  min-height: 100dvh;
  font-family: 'Inter', system-ui, sans-serif;
  background: radial-gradient(circle at top, #f5f8ff, #edf2ff 60%, #e5e9ff);
  color: #111;

  &__navigation {
    background: #ffffff;
    border-radius: 4px 0 0 4px;
    box-shadow: 4px 12px 40px rgba(15, 23, 42, 0.15);
    padding: 32px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid rgba(15, 23, 42, 0.08);
  }

  &__navigation-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 8px;
  }

  &__navigation-label {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #404040;
    margin: 0;
  }

  &__navigation-title {
    margin: 0;
    font-size: 1.75rem;
    color: #0a0a0a;
  }

  &__navigation-subtitle {
    margin: 0;
    font-size: 0.95rem;
    color: #5d667f;
  }

  &__content {
    padding: 40px 48px;
    border-left: 1px solid rgba(15, 23, 42, 0.05);
    box-sizing: border-box;
  }

  @media (min-width: 960px) {
    &__navigation {
      overflow: hidden;
      max-height: 100dvh;
    }

    &__navigation-tree {
      overflow-y: auto;
      padding-right: 6px;
    }

    &__content {
      overflow-y: auto;
      max-height: 100dvh;
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;

    &__navigation {
      border-radius: 0 0 4px 4px;
      border-right: none;
    }

    &__content {
      padding-top: 24px;
    }
  }
}
</style>
