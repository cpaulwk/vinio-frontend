import Image from "next/image";

type HeroBackgroundProps = {
  imageSrc: string;
};

export default function HeroBackground({ imageSrc }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <Image
        src={imageSrc}
        fill={true}
        style={{ objectFit: "cover" }}
        alt="hero-background"
        priority
      />
    </div>
  )
};
