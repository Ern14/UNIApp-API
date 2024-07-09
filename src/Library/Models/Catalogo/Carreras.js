export class Carreras{
    constructor(userData) {
        this.idCarrera = userData.idCarrera;
        this.idDepartamento = userData.idDepartamento;
        this.Abreviatura = userData.Abreviatura;
        this.Nombre = userData.Nombre;
        this.Descripcion = userData.Descripcion;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}