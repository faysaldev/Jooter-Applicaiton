

const JWT_SECRET = process.env.JWT_SECRET!

if (!JWT_SECRET) {
  throw new Error('Please define JWT_SECRET in env')
}

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' })
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET)
}
