import jwt from "jsonwebtoken"
export const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {uid}
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                console.log(err)
                reject(null)
            } else {
                resolve(token)
            }
        })
    })
}