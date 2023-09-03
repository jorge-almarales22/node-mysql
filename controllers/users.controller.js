import { pool } from "../database/config.js"

export const userGet = async(req, res) => {
    try {
        const [resp] = await pool.query('SELECT name, salary from users')
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