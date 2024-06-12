// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: 'Hicham Taha | %s',
      title: 'Full Stack Developer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Looking for a software developer from Vancouver BC? Contact specialist Hicham Taha for development inquires at (778) - 789 - 1002',
        },
        { name: 'author', content: 'Hicham Taha' },
      ],
      link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
				{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
				{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css' },
			],
    },
  },
  // Global CSS: https://nuxt.com/docs/api/nuxt-config#css
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/theme/index.css',
  ],
	ssr: true,
  postcss: {
		plugins: {
			'postcss-mixins': {
				mixinsDir: path.join(__dirname, 'assets/css/mixins'), // have to specify dir here, since loading in index.css does not work.
			},
			'postcss-import': {},
			'postcss-nested': {},
			'postcss-simple-vars': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {
				// Change the postcss-preset-env settings
				grid: true,
			}
		},
	},
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  devServer: {
    port: 3069,
  },
})
