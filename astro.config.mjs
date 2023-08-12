import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({

        site: 'https://MaxSerrano.github.io',
        base: '/astro-acromatico',

        output: 'server',
        adapter: netlify(),
        
});
        