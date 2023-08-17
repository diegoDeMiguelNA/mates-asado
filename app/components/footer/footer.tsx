import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="inset-0 bg-cover bg-bottom h-[120px] md:h-[160px] bg-[url('/images/jungfernstieg.webp')]" />
      <div className="bg-regular-red w-full flex flex-col items-center justify-center h-auto py-6">
        <h3 className="text-xl font-heading font-light m-4">Mates & Asado</h3>
        <ul className="list-none p-0 flex flex-col items-center space-y-2 text-xxs mb-10">
          <li className="m-0">
            <Link href="/about-us">
              About us
            </Link>
          </li>
          <li className="m-0">
            <Link href="/kontakt">
              Kontakt
            </Link>
          </li>
          <li className="m-0">
            <Link href="/impressum">
              Impressum
            </Link>
          </li>
          <li className="m-0">
            <Link href="/datenschutz">
              Datenschutz
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
