import express from 'express';

//Importaciones de los catalogos
import Asignaturas from './Catalogos/Asignaturas.Routes';
import Asistencias from './Catalogos/Asistencias.Routes';
import Departamentos from './Catalogos/Departamentos.Routes';
import Docentes from './Catalogos/Docentes.Routes';
import Grupos from './Catalogos/Grupos.Routes';
import Periodos from './Catalogos/Periodos.Routes';

//Importaciones del esquema Operaciones
import DocenteAsignatura from './Operaciones/DocenteAsignatura.Routes';
import DocenteDepartamento from './Operaciones/DocenteDepartamento.Routes';
import DocenteGrupo from './Operaciones/DocenteGrupo.Routes';

//Importaciones del esquema Seguridad
import UsersRoutes from './Seguridad/Usuarios.Routes';
import RolRoutes from './Seguridad/Roles.Routes';

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