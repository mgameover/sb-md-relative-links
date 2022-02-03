module.exports = {
  stories: ['../src/stories/**/*.stories.@(ts|mdx)'],
  logLevel: 'debug',
  addons: [
      '@storybook/addon-docs',
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-knobs',
      '@storybook/addon-a11y',
      '@storybook/addon-viewport',
  ],
  framework: "@storybook/angular",
  core: {
      builder: "webpack5",
  },
};
