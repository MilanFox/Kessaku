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

<style lang="scss" src="./Styleguide.style.scss" />
