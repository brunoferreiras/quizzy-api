import { ExtractJwt } from 'passport-jwt'
import { config } from 'dotenv'
config()

export default {
    secretOrKey: process.env.JWT_SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
}