import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      external: Object.keys(require('./package.json').dependencies),
    },
    minify: false,
  },
});
