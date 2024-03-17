import app from '../app';

const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ mensaje: 'Unauthorized' });
    } else {
        const bearedToken = token.split(" ")[1];

        jwt.verify(bearedToken, app.get('key'), (err, decoded) => {
            if (err) {
                return res.status(403).json({ mensaje: 'Invalid token' });
            }
            req.decoded = decoded.user;
            next();
        });

    }
}

module.exports = verificarToken;