import Link from "next/link";

type ButtonProps = {
  name: string;
  borderColor?: string;
};

export default function Button({ name, borderColor }: ButtonProps) {
  if (!borderColor) {
    borderColor = "red"
  }

  return (
    <Link
      href="/vinio"
      className={`flex h-[3.125rem] w-[14.375rem] items-center border border-brand-${borderColor} justify-center rounded-[50px] bg-brand-red text-brand-white`}
    >
      <p>{name}</p>
    </Link >
  );
}
