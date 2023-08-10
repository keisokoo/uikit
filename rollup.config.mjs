import { DEFAULT_EXTENSIONS } from '@babel/core'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import license from 'rollup-plugin-license'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

import PACKAGE from './package.json' assert { type: 'json' }

const fullYear = new Date().getFullYear()

const banner = `${PACKAGE.name} - ${PACKAGE.version}
  Author : ${PACKAGE.author}
  Copyright (c) ${fullYear !== 2016 ? '2016,' : ''} ${fullYear} to ${
    PACKAGE.author
  }, released under the ${PACKAGE.license} license.`

const globals = {
  dayjs: 'DayJs',
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'StyledComponents',
  'react-syntax-highlighter': 'ReactSyntaxHighlighter',
  'react-syntax-highlighter/dist/esm/styles/prism': 'PrismStyles',
  'dayjs/plugin/weekOfYear': 'weekOfYear',
}

const defaultConfig = {
  onwarn(warning, warn) {
    if (
      warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
      warning.message.includes(`"use client"`)
    ) {
      return
    }
    warn(warning)
  },
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/kui.es.js',
      format: 'esm',
      globals,
      exports: 'auto',
      interop: 'compat',
    },
    {
      file: 'dist/kui.cjs.js',
      format: 'cjs',
      globals,
      exports: 'auto',
      interop: 'compat',
    },
    {
      file: 'dist/kui.js',
      format: 'umd',
      name: 'Kui',
      globals,
      exports: 'auto',
      interop: 'compat',
    },
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
    'react-syntax-highlighter',
    'dayjs',
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      target: 'es2016',
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
    }),
    resolve({
      dedupe: [
        'styled-components',
        'react-syntax-highlighter',
        'react-dom',
        'react',
        'dayjs',
      ],
      moduleDirectories: ['node_modules'],
    }),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
      exclude: /node_modules/,
      babelHelpers: 'bundled',
    }),
    commonjs({
      include: /node_modules/,
    }),
    license({ banner }),
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
  plugins: [...defaultConfig.plugins],
}

export default [defaultConfig, minConfig]
