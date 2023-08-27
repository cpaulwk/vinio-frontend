import Link from "next/link";

type HeaderProps = {
  page: string;
  targetRef?: React.MutableRefObject<HTMLDivElement | null | undefined>;
};

interface FontColors {
  [key: string]: string;
}

export default function Header({ page }: HeaderProps) {
  enum Page {
    Home = "Home",
    About = "About",
    Vinio = "Vinio",
  }

  const fontColors: FontColors = {
    [Page.Home]: "text-brand-white",
    [Page.About]: "text-brand-red",
    [Page.Vinio]: "text-brand-red",
  };

  const fontColor = fontColors[page] || "text-brand-white";

  return (
    <header className="relative flex h-[7.5rem] w-screen shrink-0 items-center justify-between px-[4.25rem]">
      <div
        className={`flex w-full items-center ${fontColor} gap-x-[5.3125rem]`}
      >
        <Link href="/#home" className="text-xl xl:text-2xl">
          Vinio
        </Link>
        {page !== Page.Vinio && (
          <nav
            className={`flex items-center gap-x-[3rem] text-l max-md:hidden lg:gap-x-[5.3125rem] xl:text-2xl`}
          >
            <Link href="/#home">Home</Link>
            <Link href="/#what-is-vinio">What is Vinio?</Link>
            <Link href="/about">About</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
