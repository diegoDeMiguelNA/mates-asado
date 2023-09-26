import Image, { ImageProps } from "next/image";

interface ImageWrapperProps extends ImageProps {
  divClassName?: string;
  divStyle?: React.CSSProperties;
}

function ImageWrapper({
  src,
  alt,
  width,
  height,
  priority,
  placeholder,
  blurDataURL,
  divClassName,
  divStyle,
}: ImageWrapperProps): JSX.Element {
  return (
    <div className={`relative ${divClassName}`} style={divStyle}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
    </div>
  );
}

export default ImageWrapper;
