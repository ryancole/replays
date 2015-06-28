import settings from '../settings';

export default {
  get: key => {
    const env = process.env.NODE_ENV || "development";
    if (env.trim() == "production") {
      return settings.production[key];
    }
    return settings.development[key];
  }
};
