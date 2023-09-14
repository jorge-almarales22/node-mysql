export const validateToken = (req, res, next) => {
    const { token } = req.body;

    if(!token){
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }

    next()
}