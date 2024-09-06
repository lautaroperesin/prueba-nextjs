export default function Partido({equipoLocal, equipoVisitante, numeroFecha, dia, hora, estadio}) {
    return (
        <>
        <div>
            <h2>{equipoLocal} vs {equipoVisitante}</h2>
            <p>Fecha: {numeroFecha}</p>
            <p>Dia: {dia}</p>
            <p>Hora: {hora}</p>
            <p>Estadio: {estadio}</p>
        </div>
        </>
    );
}