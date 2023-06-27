import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 工程根目录
export const ROOT_PATH = resolve(__dirname, '../')

// utils 包的根目录
export const UTILS_PATH = resolve(ROOT_PATH, './packages/utils')
