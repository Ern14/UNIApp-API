import path from 'path';

export const obtenerManualUsuario = async (req, res) => {
    try {
        const filePath = path.resolve('C:/ManualUsuario/ManualUsuario.pdf');

        res.download(filePath, 'ManualUsuario.pdf', (err) => {
            if (err) {
                res.status(500).json({
                    status: 'Error',
                    datos: {
                        mensaje: 'No se pudo descargar el archivo'
                    }
                });
            }
        });

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