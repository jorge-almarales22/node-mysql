import { googleVerify } from "../helpers/google-verify-token.js"

export const loginWithGoogle = async(req, res) => {

    const {token} = req.body

    const {email, name, picture} = await googleVerify(token)

    res.json({email, name, picture})
}