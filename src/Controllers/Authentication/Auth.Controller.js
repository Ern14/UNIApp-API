import app from "../../app";
import bcryptjs from 'bcryptjs';
import { validarUsuarioxCorreoBLL } from '../../Library/BLL/Seguridad/Usuarios';
import { filtrarUsuariosxIdBLL } from "../../Library/BLL/Seguridad/Usuarios";

const jwt = require('jsonwebtoken');

export const validarUsuario = async ( req, res ) => {
    try {
        const Correo = req.body.Correo;
        const Contraseña = req.body.Contraseña;
        if (Correo == null || Contraseña == null) {
            const response = {
                status: 'Error',
                statusCode: 400,
                datos: {
                    mensaje: "Información incompleta"
                }
            };
            res.status(response.statusCode).send(response);
            return;
        };

        const data = await validarUsuarioxCorreoBLL(Correo);

        let resp;
        if (!data[0]){
            const response = {
                status: 'Exito',
                statusCode: 400,
                datos: { 
                    mensaje: "Usuario o contraseña incorrectos"
                }
            }
            res.status(response.statusCode).send(response);
            return;
        }else{
            const resultado = await bcryptjs.compare(Contraseña,data[0].Contraseña);
            if (resultado){
                resp = {
                    idUsuario: data[0].idUsuario,
                    correo: data[0].Correo,
                    idRol: data[0].FK_idRol
                }

                const token = jwt.sign({user: resp},app.get('key'),{algorithm: 'HS256'},{
                    expiresIn: '7d'
                });

                const response = {
                    status: 'Exito',
                    statusCode: 200,
                    datos: { 
                        mensaje: "Autenticación con éxito"
                    }
                }
                res.cookie('token',token,{
                    sameSite: 'none',
                    secure: true,
                    httpOnly: false
                });

                res.status(response.statusCode).send(response);

            }else{
                const response = {
                    status: 'Exito',
                    statusCode: 400,
                    datos: { 
                        mensaje: "Usuario o contraseña incorrectos"
                    }
                }
                res.status(response.statusCode).send(response);
                return;
            }
        }

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
        return;
    }

};

export const cerrarSesion = async ( req, res ) => {
    try {
        res.cookie('token',"",{
            expires: new Date(0)
        });

        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: { 
                mensaje: "Se ha cerrado sesión"
            }
        }
        res.status(response.statusCode).send(response);
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: error.message
        }
        res.status(response.statusCode).send(response);
    }
}

export const verificarToken = async (req,res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }else {
        jwt.verify(token, app.get('key'), async (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            const datos = await filtrarUsuariosxIdBLL(decoded.user.idUsuario);
            return res.json({
                idUsuario: datos[0].idUsuario,
                idRol: datos[0].FK_idRol
            });
        });
    }
}