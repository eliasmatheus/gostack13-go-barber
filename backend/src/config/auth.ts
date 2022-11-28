import { Secret } from 'jsonwebtoken';

interface IAuthConfig {
  jwt: {
    secret: Secret;
    expiresIn: string;
  };
}

export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  },
} as IAuthConfig;
