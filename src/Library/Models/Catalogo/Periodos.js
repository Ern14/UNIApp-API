export class Periodos{
    constructor(userData) {
        this.idPeriodo = userData.idPeriodo;
        this.Nombre = userData.Nombre;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}