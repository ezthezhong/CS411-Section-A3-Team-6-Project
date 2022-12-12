// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "IoEgcr3gdvCnH7x8O6iR9hYVj",
  TWITTER_CONSUMER_SECRET: "z91pJYmtxipJgsoIp2N6Zfsva0uBk5juFqR8jGE0l4BVXy8fXW",
  TWITTER_ACCESS_TOKEN: "-eEqLwAAAAABkCaBAAABhO4y-ok",
  TWITTER_TOKEN_SECRET: "Fw9MjkBsVUxSByVXHhWuML4URVzzsdCn"
};

const DB_USER = "CS411";
const DB_PASSWORD = "fgkROiB9dnVrbVbx";
const MONGODB = {
  MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds<SOME_DOMAIN>.mlab.com:<PORT>/<PROJECT_NAME>`
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;
