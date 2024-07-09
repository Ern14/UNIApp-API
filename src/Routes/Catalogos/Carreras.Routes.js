import { Router } from "express";

import { obtenerCarreras, insertarCarrera, actualizarCarrera, eliminarCarrera, filtrarCarrerasxBusqueda, filtrarCarreraxId } from "../../Controllers/Catalogo/Carreras.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/carreras/obtenerCarreras', verificarToken, obtenerCarreras);

router.post('/carreras/filtrarCarreraxBusqueda', verificarToken, filtrarCarrerasxBusqueda);

router.get('/carreras/filtrarCarreraxId/:idCarrera', verificarToken, filtrarCarreraxId);

router.post('/carreras/insertarCarrera', verificarToken, insertarCarrera);

router.put('/carreras/actualizarCarrera', verificarToken, actualizarCarrera);

router.delete('/carreras/eliminarCarrera', verificarToken, eliminarCarrera);


export default router;