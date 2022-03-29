module.exports = {
  presets: ['next/babel', '@babel/preset-typescript'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
      },
    ],
    [
      '@babel/plugin-proposal-private-property-in-object',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-private-methods',
      {
        loose: true,
      },
    ],
  ],

  env: {
    test: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: false,
            displayName: false,
          },
        ],
      ],
    },
  },
};
