import { pool } from "../database/config.js"
import { generateJWT } from "../helpers/generateJWT.js"
import { googleVerify } from "../helpers/google-verify-token.js"

export const loginWithGoogle = async(req, res) => {

    const {token} = req.body

    const {email, name, picture: image} = await googleVerify(token)


    const [resp] = await pool.query('insert into users (name, salary, image, email, password) values (?, ?, ?, ?, ?)', [name, 1234, image, email, 'password'])

    if(resp.affectedRows == 0){
        return res.status(400).json({msg: 'User not found'})
    }

    const tkn = await generateJWT(resp.insertId)

    res.json({ok: true, message: "usuario logueado", token: tkn, email })
}