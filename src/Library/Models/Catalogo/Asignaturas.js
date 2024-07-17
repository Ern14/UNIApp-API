export class Asignaturas{
    constructor(userData) {
        this.idAsignatura = userData.idAsignatura;
        this.Nombre = userData.Nombre;
        this.Descripcion = userData.Descripcion;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}