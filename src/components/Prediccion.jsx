export default function Prediccion({local, visitante}) {
    return(
        <>
        <section>
            <form>
                <label for="golesLocal">{local}</label>
                <input type="number" name="golesLocal" id="golesLocal" min="0" max="10" />
                <label for="golesVisitante">{visitante}</label>
                <input type="number" name="golesVisitante" id="golesVisitante" min="0" max="10" />
                <button type="submit">Enviar</button>
            </form>
         </section>
        </>
    );
}