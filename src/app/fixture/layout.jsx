export const metadata = {
    title: "Fixture",
    description: "Fixture de futbol argentino"
}

export default function FixtureLayout({children}){
    return(
        <>
        <header>Cabecera del fixture</header>
        <main>
            <section>{children}</section> 
            <aside>
                <h3>Tabla de posiciones</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Equipo</th>
                            <th>Pts</th>
                            <th>PJ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Equipo 1</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Equipo 2</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </aside>
        </main>
        <footer>Pie del fixture</footer>
        </>
    );
}