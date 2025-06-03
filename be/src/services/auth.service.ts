import jwt, { SignOptions } from 'jsonwebtoken';

const JWT_SECRET: jwt.Secret = process.env.JWT_SECRET ?? '';
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET .env içinde tanımlı değil!');
}

export const generateToken = (
  payload: object,
  expiresIn: SignOptions['expiresIn'] = '1d'
): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};
