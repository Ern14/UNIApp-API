export class Asistencias{
    constructor(userData) {
        this.idAsistencia = userData.idAsistencia;
        this.idDocente = userData.idDocente;
        this.Asistencia = userData.Asistencia;
        this.Fecha = userData.Fecha;
        this.Observaciones = userData.Observaciones;
        this.Activo = userData.Activo;
    }
}