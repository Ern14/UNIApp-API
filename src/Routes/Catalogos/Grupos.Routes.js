import { Router } from "express";

import { obtenerGrupos, insertarGrupo, actualizarGrupo, eliminarGrupo, filtrarGruposxBusqueda, filtrarGruposxId } from "../../Controllers/Catalogo/Grupos.Controller";

const verificarToken = require('../../Authorization/AuthMiddleware');

const router = Router();

router.get('/grupos/obtenerGrupos', verificarToken, obtenerGrupos);

router.post('/grupos/filtrarGruposxBusqueda', verificarToken, filtrarGruposxBusqueda);

router.get('/grupos/filtrarGrupoxId/:idGrupo', verificarToken, filtrarGruposxId);

router.post('/grupos/insertarGrupo', verificarToken, insertarGrupo);

router.put('/grupos/actualizarGrupo', verificarToken, actualizarGrupo);

router.delete('/grupos/eliminarGrupo', verificarToken, eliminarGrupo);

export default router;