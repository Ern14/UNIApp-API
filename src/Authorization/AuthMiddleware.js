import app from '../app';

const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }else {
        jwt.verify(token, app.get('key'), (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.decoded = decoded.user;
            next();
        });

    }
}

module.exports = verificarToken;