import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex w-screen flex-col items-center justify-between overflow-hidden">
      <div className="flex flex-col w-screen h-screen">
        <Image
          src="/images/hero-background.png"
          fill={true}
          style={{ objectFit: "cover" }}
          alt="hero-background"
          className="absolute -z-10"
        />
        <header className="flex w-screen h-[120px] justify-between items-center px-[4.25rem]">
          <div className="flex items-center text-brand-white gap-x-[5.3125rem]">
            <p className="text-3xl">Vinio</p>
            <div className="flex items-center gap-x-[5.3125rem] text-2xl">
              <p className="">Home</p>
              <p className="">What is Vinio?</p>
              <p className="">About</p>
            </div>
          </div>
          <div className="flex items-center text-brand-white text-2xl">
            <p className="border-r px-[0.875rem]">FR</p>
            <p className="px-[0.875rem]">EN</p>
          </div>
        </header>
        <div className="flex grow flex-col gap-y-[5.6875rem] items-center justify-center px-[6.25rem]">
          <p className="text-brand-white text-3xl text-center">
            Vinio - the web application that takes the guesswork out of wine
            pairing!
          </p>
          <button className="w-[14.375rem] h-[3.125rem] rounded-[50px] bg-brand-red text-brand-white">
            Try Vinio
          </button>
        </div>
      </div>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex flex-1 gap-x-[9.375rem] items-center justify-center bg-brand-white text-brand-red px-[6.25rem]">
          <p className="w-[34.375rem]">
            Gone are the days of feeling overwhelmed in the wine aisle or
            struggling to identify the perfect pairing for your meal. Vinio
            takes all the guesswork out of wine selection, providing
            personalized recommendations based on your individual taste
            preferences and the occasion.
          </p>
          <p className="w-[34.375rem]">
            And the best part? Our web application is accessible to everyone,
            not just those with a refined palate or extensive wine knowledge.
            Whether you're a seasoned wine enthusiast or just starting to
            explore the world of wine, Vinio is here to help you discover your
            new favorite bottle.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center bg-brand-blue text-brand-white p-[6.25rem]">
          <div className="flex flex-1 items-center justify-center h-full border-r border-brand-white p-[1rem]">
            <p className="text-center">
              Saves you time and money by helping you select the perfect bottle
              for any occasion.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center h-full border-r border-brand-white p-[1rem]">
            <p className="text-center">
              Provides an easy-to-use interface and spot-on recommendations,
              making you feel like an expert.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center h-full border-r border-brand-white p-[1rem]">
            <p className="text-center">
              Takes all the guesswork out of wine selection, providing
              recommendations based on the occasion.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center h-full p-[1rem]">
            <p className="text-center">
              Makes you feel confident in your wine selection, even if you're a
              beginner.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[1.875rem] flex-1 items-center justify-center bg-brand-white text-brand-blue px-[6.25rem]">
          <p className="text-center leading-[1.6875rem]">
            Ready to experience the future of wine selection?
            <br />
            Head to our website and try Vinio today! Whether you're a seasoned
            wine enthusiast or just starting to explore the world of wine.
          </p>
          <button className="w-[14.375rem] h-[3.125rem] rounded-[50px] bg-brand-red text-brand-white">
            Try Vinio
          </button>
        </div>
        <div className="flex items-center justify-center h-[2.0625rem] bg-brand-blue text-brand-white px-[6.25rem]">
          <p className="text-s">
            © 2023 - 2023 www.vinio.com - All Rights Reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
