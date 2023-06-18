import Link from "next/link";

type HeaderProps = {
  page: string;
};

export default function Header({ page }: HeaderProps) {
  let fontColor: string;

  enum Page {
    Home = "Home",
    About = "About",
    Vinio = "Vinio",
  }

  switch (page) {
    case Page.Home:
      fontColor = "text-brand-white";
      break;
    case Page.About:
      fontColor = "text-brand-red";
      break;
    case Page.Vinio:
      fontColor = "text-brand-red";
      break;
    default:
      fontColor = "text-brand-white";
      break;
  }

  return (
    <header className="relative flex h-[7.5rem] w-screen items-center justify-between px-[4.25rem]">
      <div className={`flex items-center ${fontColor} gap-x-[5.3125rem]`}>
        <Link href="/index#home" className="text-xl xl:text-2xl">
          Vinio
        </Link>
        {page !== Page.Vinio && (
          <div className="flex items-center gap-x-[5.3125rem] text-l xl:text-2xl">
            <Link href="/index#home">Home</Link>
            <Link href="/index#whatIsVinio">What is Vinio?</Link>
            <Link href="/about">About</Link>
          </div>
        )}
      </div>
      <div className={`flex items-center ${fontColor} text-l xl:text-xl`}>
        <button className="border-r px-[0.875rem]">FR</button>
        <button className="px-[0.875rem]">EN</button>
      </div>
    </header>
  );
}
