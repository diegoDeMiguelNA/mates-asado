export default function Header() {
  return (
    <header className="relative grid grid-rows-header h-[230px] md:h-[280px] lg:h-[500px]">

      <div className="absolute inset-0 bg-cover bg-center opacity-80 h-[210px] md:h-[260px] lg:h-[480px] bg-[url('/images/port.webp')]" />

      <div className="flex flex-col justify-center items-center h-[190px] md:h-[240px] lg:h-[460px] relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-heading font-light mb-7.5 order-2 text-white">Mates & Asado</h1> 
        <h3 className="text-xs md:text-sm text-center mb-2.5 order-1 text-white">By M&A&apos;s Team</h3>
      </div>

      <div className="absolute bottom-0 bg-customRed w-full flex items-center justify-center h-[20px] md:h-[22px] lg:h-[38px]">
        <h2 className="text-xxs md:text-sm lg:text-xl leading-tight text-white">Comunidad de ayuda para emigrados en Hamburgo</h2>
      </div>

    </header>
  );
}
