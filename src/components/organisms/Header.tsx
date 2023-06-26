import Link from "next/link";
import { useBreakpoint } from "@/utils/useBreakpoint";

type HeaderProps = {
  page: string;
  targetRef?: React.MutableRefObject<HTMLDivElement | null | undefined>;
};

export default function Header({ page, targetRef }: HeaderProps) {
  let fontColor: string;
  const isBelowXsBreakpoint = useBreakpoint("xs");
  const isBelowMdBreakpoint = useBreakpoint("md");

  enum Page {
    Home = "Home",
    About = "About",
    Vinio = "Vinio",
  }

  if (page === Page.About || page === Page.Vinio) {
    fontColor = "text-brand-red";
  } else {
    fontColor = "text-brand-white";
  }

  const scrollToTarget = () => {
    if (targetRef?.current) {
      targetRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative flex h-[7.5rem] w-screen items-center justify-between px-[4.25rem]">
      <div
        className={`flex w-full items-center ${fontColor} gap-x-[5.3125rem]`}
      >
        <Link href="/#home" className="text-xl xl:text-2xl">
          Vinio
        </Link>
        {page !== Page.Vinio && (
          <div
            className={`flex items-center ${isBelowMdBreakpoint ? "hidden" : ""
              } gap-x-[3rem] text-l lg:gap-x-[5.3125rem] xl:text-2xl`}
          >
            <Link href="/#home">Home</Link>
            <Link href="/#what-is-vinio" onClick={() => scrollToTarget()}>
              What is Vinio?
            </Link>
            <Link href="/about">About</Link>
          </div>
        )}
      </div>
      <div
        className={`flex items-center ${fontColor} ${isBelowXsBreakpoint ? "hidden" : ""
          } text-l xl:text-xl`}
      >
        <button className="border-r px-[0.875rem]">FR</button>
        <button className="px-[0.875rem]">EN</button>
      </div>
    </header>
  );
}
