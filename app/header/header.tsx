export default function Header() {
  return (
    <header className="relative text-white grid grid-rows-header" style={{ height: '230px' }}>
      <div className="flex flex-col  justify-center items-center h-full relative z-10 bg-cover bg-center" style={{ height: '210px', backgroundImage: 'url(/images/port.webp)' }}>
        <h1 className="text-3xl font-normal">Mates & Asado</h1>
        <h3 className="absolute top-0 left-0 right-0 text-xs text-center" style={{ fontSize: '8px' }}>By M&A&apos;s Team</h3>
      </div>
      <div className="bg-customRed w-full flex items-center justify-center" style={{ height: '20px' }}>
        <h2 className="text-xs leading-tight" style={{ fontSize: '8px' }}>Comunidad de ayuda para emigrados en Hamburgo</h2>
      </div>
    </header>
  );
}
