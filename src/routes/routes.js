import express from 'express';

//Importaciones de los catalogos
import Asignaturas from './catalogos/asignaturas.routes';
import Asistencias from './catalogos/asistencias.routes';
import Departamentos from './catalogos/departamentos.routes';
import Docentes from './catalogos/docentes.routes';
import Grupos from './catalogos/grupos.routes';
import Periodos from './catalogos/periodos.routes';

//Importaciones del esquema Operaciones
import DocenteAsignatura from './operaciones/docenteAsignatura.routes';
import DocenteDepartamento from './operaciones/docenteDepartamento.routes';
import DocenteGrupo from './operaciones/docenteGrupo.routes';

//Importaciones del esquema Seguridad
import UsersRoutes from './seguridad/usuarios.routes';
import RolRoutes from './seguridad/roles.routes';

const router = express.Router();

//Rutas de los catalogos
router.use(Asignaturas);
router.use(Asistencias);
router.use(Departamentos);
router.use(Docentes);
router.use(Grupos);
router.use(Periodos);

//Rutas del esquema Operaciones
router.use(DocenteAsignatura);
router.use(DocenteDepartamento);
router.use(DocenteGrupo);

//Rutas del esquema Seguridad
router.use(UsersRoutes);
router.use(RolRoutes);

export default router;