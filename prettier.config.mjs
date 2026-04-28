/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type {PrettierConfig & SortImportsConfig & TailwindConfig} */
const config = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSameLine: false,
  singleAttributePerLine: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  tailwindFunctions: ['cn', 'cva'],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '^@?\/',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderCaseSensitive: false,
};

export default config;
