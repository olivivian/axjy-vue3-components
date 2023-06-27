import pkg from 'gulp'
import clean from 'gulp-clean'
import { UTILS_PATH } from './build/path.js'
import { startBuildUtils } from './build/build-utils.js'

const { src, series } = pkg

// 待清理的目标目录
const ARTIFACTS_DIRS = ['dist', 'es', 'lib', 'types']

// 把清理的过程稍微封装下，便于各个子包都能用上
function cleanDir(dir = 'dist', options = {}) {
  return src(dir, { allowEmpty: true, ...options }).pipe(clean({ force: true }))
}

// 暴露出清理 utils 包产物目录的方法
export const cleanUtils = cleanDir.bind(null, ARTIFACTS_DIRS, { cwd: UTILS_PATH })

// 先 cleanUtils，再 buildBundle，通过 series 按顺序执行
export const buildUtils = series(cleanUtils, startBuildUtils)
