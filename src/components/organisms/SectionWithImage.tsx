import Image from "next/image";

interface SectionWithImageProps {
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  textColor: string;
  title: string;
  content: string;
  reverse?: boolean;
}

export default function SectionWithImage({
  imageSrc,
  imageAlt,
  bgColor,
  textColor,
  title,
  content,
  reverse = false,
}: SectionWithImageProps) {
  const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <div
      className={`flex h-[100vh] max-h-[100vh] w-full flex-col items-center justify-center gap-[3.15rem] ${bgColor} ${textColor} md:h-[40vh] md:min-h-[40vh] ${flexDirection}`}
    >
      <div className="flex h-full w-full basis-1/2 flex-col items-center justify-center gap-[2rem] p-[1.25rem] md:items-start md:gap-[1rem] md:pl-[5rem]">
        <p className="text-l sm:text-xl">{title}</p>
        <p>{content}</p>
      </div>
      <div className="relative flex aspect-square h-full basis-1/2 justify-center ">
        <Image
          src={imageSrc}
          fill={true}
          style={{ objectFit: "contain", objectPosition: "center" }}
          alt={imageAlt}
        />
      </div>
    </div>
  );
}
