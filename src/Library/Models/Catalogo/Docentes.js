export class Docentes{
    constructor(userData) {
        this.idDocente = userData.idDocente;
        this.idAsistencia = userData.idAsistencia;
        this.Nombre = userData.Nombre;
        this.Apellido = userData.Apellido;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}