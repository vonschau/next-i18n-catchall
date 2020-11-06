module.exports = {
  i18n: {
    "locales": ["en", "cs"],
    "defaultLocale": "en"
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}