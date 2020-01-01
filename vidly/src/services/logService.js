// use this if you want to work with sentry
/*
import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://94a1eb8dbb9f43a3806460823f554d7d@sentry.io/1868299"
  });
}

// use this if you want to work with sentry
function log(err) {
  Sentry.captureException(err);
}
*/

function init() {}

function log(err) {
  console.log(err);
}
export default {
  init,
  log
};
