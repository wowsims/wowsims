import image from '@rollup/plugin-image'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/ts/core/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    terser(),
    typescript({
      exclude: ['src/ts/stories/*'],
    }),
    scss({
      fileName: 'css/wowsims.min.css',
      outputStyle: 'compressed',
    }),
    image({
      include: ['assets/img/*'],
    }),
  ],
}
