module.exports = {
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
    ROOT_DIRECTORY: '/home/site/wwwroot',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};