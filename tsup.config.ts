import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'],
  clean: true,
  outDir: 'dist',
  loader: {
    '.yml': 'binary',
    '.md': 'text',
  },
  // todo esm when axios is ok
  format: ['cjs'],
  target: 'esnext',
})
