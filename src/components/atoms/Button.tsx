import Link from "next/link";

type ButtonProps = {
  name: string;
  borderColor?: string;
};

export default function Button({ name }: ButtonProps) {
  return (
    <Link
      href="/vinio"
      className={`flex h-[3.125rem] w-[14.375rem] items-center justify-center rounded-[50px] border border-brand-white bg-brand-red text-brand-white max-xs:hidden`}
    >
      <p>{name}</p>
    </Link>
  );
}
