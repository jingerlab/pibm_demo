import { defineConfig } from 'vite'
// setup/main.ts
import Plotly from 'plotly.js-dist-min';
(window as any).Plotly = Plotly;

export default defineConfig({
	// Must have BOTH a leading and a trailing slash!
	base: '/pibm_demo/',
	slidev: { routerMode: 'hash' },
	build: {
		assetsDir: 'assets'
	}
})
