export class Roles{
    constructor(userData) {
        this.idRol = userData.idRol;
        this.Nombre = userData.Nombre;
        this.Descripcion = userData.Descripcion;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}