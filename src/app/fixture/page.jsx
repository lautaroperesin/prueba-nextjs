import Partido from "@/components/Partido";

export default function FixturePage() {
    return (
        <>
        <h1>Fixture de mi aplicacion de Prode</h1>
        <Partido 
        equipoLocal="Boca"
        equipoVisitante="River"
        numeroFecha={12}
        dia="Domingo"
        hora="19:00"
        estadio="La Bombonera"
        />

        <Partido 
        equipoLocal="Racing"
        equipoVisitante="Independiente"
        numeroFecha={12}
        dia="Domingo"
        hora="13:00"
        estadio="El Cilindro"
        />
        </>
    );
}