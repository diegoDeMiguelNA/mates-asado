import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="relative h-[120px] md:h-[160px] lg:h-[600px]">
        <Image
          src="/images/jungfernstieg.webp"
          alt="Jungfernstieg"
          fill
          style={{objectFit:"cover", objectPosition:"center"}}
        />
      </div>
      <div className="bg-regular-red w-full flex flex-col items-center justify-center h-auto py-6">
        <Link href="/">
          <h3 className="text-xl lg:text-5xl font-heading font-light m-4 lg:m-10 cursor-pointer">
            Mates & Asado
          </h3>
        </Link>
        <ul className="list-none p-0 flex flex-col m-10 lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-24 text-sm lg:text-sm lg:my-20">
          <li className="m-0">
            <Link href="/about-us">About us</Link>
          </li>
          <li className="m-0">
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li className="m-0">
            <Link href="/impressum">Impressum</Link>
          </li>
          <li className="m-0">
            <Link href="/datenschutz">Datenschutz</Link>
          </li>
        </ul>
        <p className="mb-10">Copyright M&A Team 2023</p>
      </div>
    </footer>
  );
}
