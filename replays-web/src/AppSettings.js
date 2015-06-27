import settings from "../settings";

// default to development settings
let output = settings.development;

// optionally set to production
if (process.env.NODE_ENV == "production") {
  output = settings.production;
}

// just export this crap
export default output;