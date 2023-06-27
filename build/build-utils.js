import { resolve } from 'node:path'
import { rollup } from 'rollup'
import fastGlob from 'fast-glob'
import rollupTypescript from '@rollup/plugin-typescript'
import pkg from 'gulp'
import { UTILS_PATH } from './path.js'

const { parallel } = pkg

// 通过 fast-glob 快速得到多入口，避免繁琐的文件列举
async function getInputs(glob = 'src/**/*.ts') {
  return await fastGlob(glob, {
    cwd: UTILS_PATH,
    absolute: true,
    onlyFiles: true,
    ignore: ['node_modules'],
  })
}
export async function buildModules() {
  // 得到多文件入口
  const input = await getInputs()

  // 得到公共的 bundle 对象
  const bundle = await rollup({
    input,
    plugins: [rollupTypescript()],
  })

  // 用 Promise.all 标识：ESM 和 CJS 都完成了，才算 buildModules 完成
  await Promise.all([
    // 输出 ESM 到 es 目录
    bundle.write({
      format: 'esm',
      dir: resolve(UTILS_PATH, 'es'),
    }),
    // 输出 CJS 到 lib 目录
    bundle.write({
      format: 'cjs',
      dir: resolve(UTILS_PATH, 'lib'),
    }),
  ])
}

export async function buildBundle() {
  // 调用 rollup api 得到一个 bundle 对象
  const bundle = await rollup({
    input: resolve(UTILS_PATH, 'src/index.ts'),
    plugins: [rollupTypescript()],
  })

  // 根据 name, format. dir 等参数调用 bundle.write 输出到磁盘
  await bundle.write({
    name: 'VpUtils',
    format: 'umd',
    dir: resolve(UTILS_PATH, 'dist'),
    sourcemap: true,
  })
}

export const startBuildUtils = parallel(buildModules, buildBundle)
