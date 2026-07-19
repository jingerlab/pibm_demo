import { defineConfig } from 'vite'

export default defineConfig({
	// Must have BOTH a leading and a trailing slash!
	base: '/pibm_demo/',
	slidev: { routerMode: 'hash' },
	build: {
		assetsDir: 'assets'
	}
})
