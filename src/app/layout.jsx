import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Prode Argentina",
    template:"%s - Prode Argentina"
  }
}

/* export const metadata = {
  title: "Prode Argentina",
  description: "Prode de futbol argentino",
};
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h2>Cabecera de la app: Prode futbol argentino</h2>
          <nav>
            <Link href="/">Inicio</Link>--
            <Link href="/prediccion">Fecha 16</Link>--
            <Link href="/fixture">Fixture</Link>--
            <Link href="/ranking">Ranking</Link>--
            <Link href="/contacto">Contacto</Link>--
            <Link href="/login">Login</Link>--
            <Link href="/registro">Registro</Link>--
            <Link href="/password">Recuperar contraseña</Link>--
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Pie de mi aplicacion</footer>
      </body>
    </html>
  );
}
