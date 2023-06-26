import Link from "next/link";
import { useBreakpoint } from "@/utils/useBreakpoint";

type ButtonProps = {
  name: string;
  borderColor?: string;
};

export default function Button({ name, borderColor }: ButtonProps) {
  const isBelowXsBreakpoint = useBreakpoint("xs");

  return (
    <Link
      href="/vinio"
      className={`${isBelowXsBreakpoint ? "hidden" : ""
        } flex h-[3.125rem] w-[14.375rem] items-center border border-brand-white justify-center rounded-[50px] bg-brand-red text-brand-white`}
    >
      <p>{name}</p>
    </Link>
  );
}
