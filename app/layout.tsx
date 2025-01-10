import Link from "next/link";
// import "global.css"
import "./globals.css";
import Image from "next/image";

//import fontAwasome
import"@fortawesome/fontawesome-svg-core/styles.css"

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"data-theme="aqua">
      <body>
        {/* buat area header */}
        <header>
          {/* area image */}
          {/*<img src="../images/logo.png" alt="Logo UTI" /> */}
          <Image src={"/images/logo.png"} alt="Logo UTI" width={320} height={60}priority></Image>
          {/* area menu */}
          <nav className="text-center mt-5 flex justify-center">
            <Link
              href={"/"}
              className="bg-red-500 rounded-full text-white px-5 py-2.5 hover:bg-red-700 mr-2.5 w-64">
              Data Mahasiswa{" "}
            </Link>
            <Link
              href={"/"}
              className="bg-red-500 rounded-full text-white px-5 py-2.5 hover:bg-red-700 ml-2 w-64">
              {" "}
              Log Data Mahasiswa{" "}
            </Link>
          </nav>
        </header>

        {/* buat area content */}
        <section className="m-5">
        {children}
        </section>
        {/* buat area footer */}
        <footer className="text-color1 bg-color2 py-5px text-center flex justify-center">
          Copyright &copy; 2024 - Tegar Sya'bani Hamid
        </footer>
      </body>
    </html>
  );
}