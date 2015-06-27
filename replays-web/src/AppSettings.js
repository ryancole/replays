import settings from '../settings';

export default {
  get: key => {
    if (process.env.NODE_ENV == "production") {
      return settings.production[key];
    }
    return settings.development[key];
  }
};
