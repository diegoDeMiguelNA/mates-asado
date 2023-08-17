import Image from "next/image";
import Link from "next/link";

type HomeIconProps = {
  iconSrc: string;
  title: string;
  description: string;
  linkTo: string;
  contentfulReference: string;
  className?: string;
};

const HomeIcon: React.FC<HomeIconProps> = ({
  iconSrc,
  title,
  description,
  linkTo,
  contentfulReference,
  className,
}) => {
  return (
    <div className={`home-icon mb-4 md:mb-0 ${className}`}>
      <Link href={linkTo} passHref>
        <div title={title} className="flex flex-col items-center cursor-pointer">
          <div className="icon-container bg-[#F8D49A] w-[60px] h-[60px] rounded-full mb-2 flex justify-center items-center">
            <Image
              width={30}  
              height={30} 
              src={iconSrc}
              alt={title}
              className="ml-[2px]"
            />
          </div>
          <h2 className="text-regular-blue text-base font-bold mb-1">{title}</h2>
          <p className="text-regular-blue f-xs max-w-[180px] break-words" style={{fontSize: '12px'}}>{description}</p>
        </div>
      </Link>
      <input type="hidden" value={contentfulReference} />
    </div>
  );
};

export default HomeIcon;
