import type { Config } from 'tailwindcss';
export default { content: ['./src/**/*.{ts,tsx}'], theme: { extend: {
  colors: { ink: '#0E1B24', stone: '#E8E9E6', paper: '#F5F6F4', patina: '#2E6B63', brass: '#B08D57' },
  fontFamily: { serif: ['var(--f-serif)', 'Georgia', 'serif'], sans: ['var(--f-sans)', 'system-ui', 'sans-serif'] } } }, plugins: [] } satisfies Config;
