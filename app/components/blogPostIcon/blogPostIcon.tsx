import Image from "next/image";
import Link from "next/link";

interface DynamicCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  postType: string;
  slug: string;
}

function BlogPostIcon({
  title,
  subtitle,
  imageUrl,
  postType,
  slug,
}: DynamicCardProps) {
  return (
    <Link
      className="relative block p-4 border border-gray-200 rounded-md bg-gray-100 hover:bg-gray-300 transition ease-in-out duration-150 max-w-[300px]"
      href={`/${postType}/${slug}`}
    >
      <div className="absolute top-0 left-0 w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          objectFit="cover"
          objectPosition="center"
          fill
          className="w-full h-full object-cover rounded shadow-md max-w-[300px]"
        />
      </div>
      <div className="mt-52">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </Link>
  );
}

export default BlogPostIcon;
