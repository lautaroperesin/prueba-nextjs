export const metadata = {
    title:{
        absolute: "Ranking del Prode",
    }
}

export default function Ranking() {
    const equipos = ["River", "Boca", "Racing", "Independiente", "San Lorenzo", "Huracan", "Velez", "Lanus", "Banfield", "Estudiantes", "Gimnasia", "Platense", "Argentinos", "Tigre", "Chacarita"];

    return(
        <>
        <h1>Ranking del Prode - Fecha 16</h1>
        <ul>
            <li>1. Usuario 1 - 20 pts</li>
            <li>2. Usuario 2 - 18 pts</li>
            <li>3. Usuario 3 - 17 pts</li>
            <li>4. Usuario 4 - 16 pts</li>
        </ul>
        <h2>Equipos</h2>
        <ol>
          {
          equipos.map((equipo,index)=> <li key={index}>{equipo}</li>)
          }
        </ol>
        </>
    );
}