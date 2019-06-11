const app = require('./index');

const appConfig = require('./core/appConfig');
const { log } = require('./core/logger');

app.listen(appConfig.service.port, (error) => {
  if (error) {
    log.error('Unable to listen for connections', error);
    process.exit(10);
  }

  log.info('server started on', `${appConfig.service.environment}`, ':', `${appConfig.service.port}`);
});
