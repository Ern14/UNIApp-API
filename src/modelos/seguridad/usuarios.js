export class Usuarios{
    constructor(userData) {
        this.idUsuario = userData.idUsuario;
        this.FK_idRol = userData.FK_idRol;
        this.Correo = userData.Correo;
        this.Contraseña = userData.Contraseña;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}