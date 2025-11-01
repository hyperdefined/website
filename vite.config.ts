import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';

//const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		//__COMMIT_HASH__: JSON.stringify(commitHash)
	}
});
