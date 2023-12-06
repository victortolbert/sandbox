const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    formatters: {
      css: true, // by default use Prettier
      html: true, // by default use Prettier
      toml: 'dprint', // use dprint for TOML
      markdown: 'prettier', // use prettier for markdown
    },
  },
  {
    ignores: [],
  },
)
