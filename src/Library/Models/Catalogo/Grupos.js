export class Grupos{
    constructor(userData) {
        this.idGrupo = userData.idGrupo;
        this.idPeriodo = userData.idPeriodo;
        this.idCarrera = userData.idCarrera;
        this.Nombre = userData.Nombre;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}