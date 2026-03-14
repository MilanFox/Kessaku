import StoryblokClient from 'storyblok-js-client';
import type { ISbStoryData } from 'storyblok-js-client';

export default defineSitemapEventHandler(async () => {
  const client = new StoryblokClient({ accessToken: process.env.NUXT_PUBLIC_STORYBLOK_ACCESS_TOKEN });

  const { data } = await client.get('cdn/stories', {
    per_page: 100, // eslint-disable-line camelcase
    excluding_fields: 'body', // eslint-disable-line camelcase
    version: 'published',
  });

  return data.stories.map((story: ISbStoryData) => ({
    loc: `/${story.full_slug}`,
    lastmod: story.published_at,
  }));
});
