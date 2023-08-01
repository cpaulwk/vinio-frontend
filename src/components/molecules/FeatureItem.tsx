type FeatureItemProps = {
  title: string;
  content: string;
};

export default function FeatureItem({ title, content }: FeatureItemProps) {
  return (
    <div className="flex flex-1 basis-full flex-col items-center justify-center gap-[1rem] border-brand-blue p-[1rem] md:basis-1/2 lg:basis-1/4 lg:border-r">
      <div className="flex basis-1/2 flex-col justify-end">
        <p className="text-center text-xl ">{title}</p>
      </div>
      <p className="basis-1/2 text-center">{content}</p>
    </div>
  );
}
