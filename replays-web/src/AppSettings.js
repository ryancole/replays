import settings from '../settings';

const env = process.env.NODE_ENV.trim();

export default {
  get: key => {
    if (env == "production") {
      return settings.production[key];
    }
    return settings.development[key];
  },
  all: () => {
    if (env == "production") {
      return settings.production;
    }
    return settings.development;
  }
};
