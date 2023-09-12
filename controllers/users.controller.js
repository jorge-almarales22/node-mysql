import { pool } from "../database/config.js"
import { html } from "../helpers/welcome.email.js"
import  sgMail  from "../services/sendgrid.js"
import 'dotenv/config'

export const userGet = async(req, res) => {
    try {
        const [resp] = await pool.query(
            `
            SELECT u.name as Nombre_Empleado, p.name as Nombre_producto, o.quantity AS Cantidad, p.price as Precio FROM orders o INNER JOIN users u ON u.id = o.user_id INNER JOIN products p on o.product_id = p.id WHERE u.id = ?;
            `,
            [req.params.id]
        )
        res.json(resp)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
export const userPost = async(req, res) => {

    try {
        const {name, salary} = req.body
        const [rows] = await pool.query('INSERT INTO users (name, salary) VALUES (?, ?)', [name, salary])
    
        res.json({ id: rows.insertId, name, salary })
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
export const userDelete = async(req, res) => {
    try {
        const { id } = req.params
        const [resp] = await pool.query('DELETE FROM users WHERE id = ?', [id])
        
        if(resp.affectedRows == 0){
            return res.status(400).json({msg: 'User not found'})
        }

        res.json({ message: 'User deleted' })

    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const userSendEmail = async(req, res) => {

    const { email, subject, message, sandbox_mode = false } = req.body
    const msg = {
        to: email,
        subject: subject,
        text: message,
        from: process.env.EMAIL,
        html,
        mail_settings: {
            sandbox_mode: {
                enable: sandbox_mode
            }
        }
    }

    try {
        await sgMail.send(msg)        
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }

    res.status(200).json({success: true})
}

export const getImage = (req, res) => {

    res.json({
        'message': 'File uploaded successfully',
    })
    
}