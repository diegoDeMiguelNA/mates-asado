export default function Header() {
  return (
    <header className="relative text-white grid grid-rows-header h-[230px]">
      <div className="relative h-full">
        <div className="absolute inset-0 bg-cover bg-center opacity-80 h-[210px] bg-[url('/images/port.webp')]" ></div>
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <h1 className="text-3xl md:text-5xl font-heading mb-7.5">Mates & Asado</h1> 
          <h3 className="order-[-1] text-xs md:text-sm text-center mb-2.5">By M&A&apos;s Team</h3>
        </div>
      </div>
      <div className="bg-customRed w-full flex items-center justify-center h-[20px] md:h-[22px]">
        <h2 className="text-xxs md:text-sm leading-tight">Comunidad de ayuda para emigrados en Hamburgo</h2>
      </div>
    </header>
  );
}
