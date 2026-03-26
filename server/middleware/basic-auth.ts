import { timingSafeEqual } from 'node:crypto';
import { createError, defineEventHandler, getRequestHeader, setHeader, type H3Event } from 'h3';

const REALM = 'Protected';

const safeEqual = (left: string, right: string): boolean => {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
};

const unauthorized = (event: H3Event): never => {
  setHeader(event, 'WWW-Authenticate', `Basic realm="${REALM}"`);
  throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
};

const misconfigured = (): never => {
  throw createError({ statusCode: 500, statusMessage: 'Basic auth is enabled but credentials are missing' });
};

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const enabled = config.basicAuthEnabled;

  if (!enabled) {
    return;
  }

  const expectedUsername = String(config.basicAuthUsername || '');
  const expectedPassword = String(config.basicAuthPassword || '');

  if (!expectedUsername || !expectedPassword) {
    misconfigured();
  }

  const authorization = getRequestHeader(event, 'authorization');
  const basicPrefix = 'Basic ';

  if (typeof authorization !== 'string' || !authorization.startsWith(basicPrefix)) {
    unauthorized(event);
  }

  const encodedCredentials = authorization.slice(basicPrefix.length).trim();
  let decodedCredentials = '';

  try {
    decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf8');
  }
  catch {
    unauthorized(event);
  }

  const separatorIndex = decodedCredentials.indexOf(':');

  if (separatorIndex < 0) {
    unauthorized(event);
  }

  const username = decodedCredentials.slice(0, separatorIndex);
  const password = decodedCredentials.slice(separatorIndex + 1);

  const isValidUsername = safeEqual(username, expectedUsername);
  const isValidPassword = safeEqual(password, expectedPassword);

  if (!isValidUsername || !isValidPassword) {
    unauthorized(event);
  }
});
