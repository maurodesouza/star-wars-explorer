module.exports = {
  stories: [
    '../src/components/**/stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],

  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  }
}
