import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  airbnb, // Airbnb 설정
  airbnbBase, // Airbnb 기본 설정
  react, // React 관련 설정
  jsxA11y, // 접근성 관련 설정
  prettier, // Prettier 설정
  prettierReact, // Prettier React 설정
]
