import { obtenerDepartamentosBLL, insertarDepartamentoBLL, actualizarDepartamentoBLL, obtenerDepartamentoxIdBLL, filtrarDepartamentosxBusquedaBLL } from '../../Library/BLL/Catalogo/Departamentos';
import { Departamentos } from '../../Library/Models/Catalogo/Departamentos';

export const obtenerDepartamentos = async ( req, res ) => {
    try {
        const data = await obtenerDepartamentosBLL();
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const filtrarDepartamentoxId = async ( req, res ) => {
    try {
        const idDepartamento = req.params.idDepartamento;
        const data = await obtenerDepartamentoxIdBLL(idDepartamento);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const filtrarDepartamentosxBusqueda = async ( req, res ) => {
    try {
        const busqueda = req.body.Busqueda;
        const data = await filtrarDepartamentosxBusquedaBLL(busqueda);

        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: data
        }
        res.status(response.statusCode).send(response);

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const insertarDepartamento = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const userData = req.body;
        const modDepartamento = new Departamentos(userData);
        if (modDepartamento.Nombre == null) {
            throw new Error("Información incompleta");
        };
        
        modDepartamento.Activo = 1;
        modDepartamento.FechaCreacion = fechaHoraActual;
        modDepartamento.FechaModificacion = fechaHoraActual;
        modDepartamento.UsuarioCreacion = usuarioLog.idUsuario;
        modDepartamento.UsuarioModificacion = usuarioLog.idUsuario;

        await insertarDepartamentoBLL(modDepartamento);
        const response = {
            status: 'Exito',
            statusCode: 200,
            datos: {
                mensaje: "Registro creado con éxito"
            }
        }
        res.status(response.statusCode).send(response);
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const actualizarDepartamento = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;

        const fechaHoraActual = new Date();
        const idDepartamento = req.body.IdDepartamento;
        const Nombre = req.body.Nombre;
        const userData = await obtenerDepartamentoxIdBLL(idDepartamento);
        if (userData.length > 0){
            const modDepartamento = new Departamentos(userData[0]);

            modDepartamento.Nombre = Nombre;
            modDepartamento.Activo = 1;
            modDepartamento.FechaModificacion = fechaHoraActual;
            modDepartamento.UsuarioModificacion = usuarioLog.idUsuario;
            await actualizarDepartamentoBLL(modDepartamento);

            const response = {
                status: 'Exito',
                statusCode: 200,
                datos: {
                    mensaje: "Registro actualizado con éxito"
                }
            }
            res.status(response.statusCode).send(response);
        }else{
            const response = {
                status: 'Exito',
                statusCode: 204,
                datos: {
                    mensaje: "Registro no encontrado"
                }
            }
            res.status(response.statusCode).send(response);
        }

    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};

export const eliminarDepartamento = async ( req, res ) => {
    try {
        const usuarioLog = req.decoded;
        
        const fechaHoraActual = new Date();
        const idDepartamento = req.body.IdDepartamento;
        const userData = await obtenerDepartamentoxIdBLL(idDepartamento);
        if (userData.length > 0){
            const modDepartamento = new Departamentos(userData[0]);

            modDepartamento.Activo = 0;
            modDepartamento.FechaModificacion = fechaHoraActual;
            modDepartamento.UsuarioModificacion = usuarioLog.idUsuario;
    
            await actualizarDepartamentoBLL(modDepartamento);

            const response = {
                status: 'Exito',
                statusCode: 200,
                datos: {
                    mensaje: "Registro eliminado con éxito"
                }
            }
            res.status(response.statusCode).send(response);
        }else{
            const response = {
                status: 'Exito',
                statusCode: 204,
                datos: {
                    mensaje: "Registro no encontrado"
                }
            }
            res.status(response.statusCode).send(response);
        }
    } catch (error) {
        const response = {
            status: 'Error',
            statusCode: error.statusCode || 500,
            datos: {
                mensaje: error.message
            }
        }
        res.status(response.statusCode).send(response);
    }

};