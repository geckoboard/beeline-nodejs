/* eslint-env node */
const schema = require("../schema"),
  url = require("url");

const httpMetadataFromURLOptions = opts => {
  return {
    [schema.HTTP_REQUEST_METHOD]: (opts.method || "GET").toUpperCase(),
    [schema.HTTP_REQUEST_PATH]: opts.pathname,
    [schema.HTTP_REQUEST_HOST]: opts.hostname,
    [schema.HTTP_REQUEST_URL]: url.format(opts),
  };
};

const httpMetadataFromHttpResponse = res => {
  return {
    [schema.HTTP_STATUS_CODE]: res.statusCode,
  };
};

module.exports = {
  httpMetadataFromURLOptions,
  httpMetadataFromHttpResponse,
};
