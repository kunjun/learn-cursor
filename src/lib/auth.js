import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const DOMAIN = process.env.DOMAIN || 'localhost';

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    if (process.env.NODE_ENV === 'development') {
      return decoded && (decoded.domain === 'localhost' || decoded.domain === '127.0.0.1');
    } else {
      return decoded && decoded.domain === DOMAIN;
    }
  } catch (error) {
    return false;
  }
}

export function createToken() {
  return jwt.sign(
    { 
      authenticated: true,
      domain: DOMAIN
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
}