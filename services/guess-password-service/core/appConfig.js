const appConfig = module.exports;

appConfig.service = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV,
};
