export class Docente_Asignatura{
    constructor(userData) {
        this.idDocente = userData.idDocente;
        this.idAsignatura = userData.idAsignatura;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}