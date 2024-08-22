export class CarreraAsignatura{
    constructor(userData) {
        this.idCarreraAsignatura = userData.idCarreraAsignatura;
        this.idCarrera = userData.idCarrera;
        this.idAsignatura = userData.idAsignatura;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}