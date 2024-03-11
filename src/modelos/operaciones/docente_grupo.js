export class Docente_Grupo{
    constructor(userData) {
        this.idDocenteGrupo = userData.idDocenteGrupo;
        this.idDocente = userData.idDocente;
        this.idGrupo = userData.idGrupo;
        this.Activo = userData.Activo;
        this.FechaCreacion = userData.FechaCreacion;
        this.FechaModificacion = userData.FechaModificacion;
        this.UsuarioCreacion = userData.UsuarioCreacion;
        this.UsuarioModificacion = userData.UsuarioModificacion;
    }
}