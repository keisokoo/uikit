import buble from '@rollup/plugin-buble'
import typescript from '@rollup/plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'
import fileSize from 'rollup-plugin-filesize'
import license from 'rollup-plugin-license'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'

import PACKAGE from './package.json'
const fullYear = new Date().getFullYear()

const banner = `${PACKAGE.name} - ${PACKAGE.version}
  Author : ${PACKAGE.author}
  Copyright (c) ${fullYear !== 2016 ? '2016,' : ''} ${fullYear} to ${
  PACKAGE.author
}, released under the ${PACKAGE.license} license.`

const globals = {
  react: 'React',
  'styled-components': 'styled',
}

const defaultConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/kui.es.js',
      format: 'esm',
      globals,
      exports: 'auto',
    },
    {
      file: 'dist/kui.cjs.js',
      format: 'cjs',
      globals,
      exports: 'auto',
    },
    {
      file: 'dist/kui.js',
      format: 'umd',
      name: 'Kui',
      globals,
      exports: 'auto',
    },
  ],
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    typescript({
      target: 'es2016',
    }),
    buble({
      objectAssign: true,
      transforms: {
        templateString: false,
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    fileSize(),
    license({
      banner,
    }),
  ],
}

const minConfig = {
  ...defaultConfig,
  output: {
    file: 'dist/kui.min.js',
    format: 'umd',
    name: 'Kui',
    globals,
    exports: 'auto',
  },
  plugins: [...defaultConfig.plugins, uglify()],
}

export default [defaultConfig, minConfig]
