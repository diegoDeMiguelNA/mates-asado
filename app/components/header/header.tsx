export default function Header() {
  return (
    <header className="relative text-white grid grid-rows-header" style={{ height: '230px' }}>
      <div className="relative h-full">
        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ height: '210px', backgroundImage: 'url(/images/port.webp)' }}></div>
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <h1 className="text-3xl font-heading mb-7.5">Mates & Asado</h1> 
          <h3 className="order-[-1] text-xs text-center mb-2.5" style={{ fontSize: '8px' }}>By M&A&apos;s Team</h3>
        </div>
      </div>
      <div className="bg-customRed w-full flex items-center justify-center" style={{ height: '20px' }}>
        <h2 className="text-xs leading-tight" style={{ fontSize: '8px' }}>Comunidad de ayuda para emigrados en Hamburgo</h2>
      </div>
    </header>
  );
}