module.exports = {
  target: "serverless",
  i18n: {
    "locales": ["en", "cs"],
    "defaultLocale": "cs"
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
