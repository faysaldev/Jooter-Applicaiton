import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string
if (!JWT_SECRET) throw new Error('JWT_SECRET missing')

export const signToken = (payload: object, expiresIn = '15m') => jwt.sign(payload, JWT_SECRET, { expiresIn })
export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET) as { id: string; email: string }
