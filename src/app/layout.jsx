import { Inter } from "next/font/google";

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
        <header>Cabecera de la app: Prode futbol argentino</header>
        <main>{children}</main>
        <footer>Pie de mi aplicacion</footer>
      </body>
    </html>
  );
}
