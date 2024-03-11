export class Docente_Departamento{
    constructor(userData) {
        this.idDocenteDepartamento = userData.idDocenteDepartamento;
        this.idDocente = userData.idDocente;
        this.idDepartamento = userData.idDepartamento;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}