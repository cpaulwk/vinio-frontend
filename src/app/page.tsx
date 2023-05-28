import Image from "next/image";
import Header from "../components/organisms/Header";
import Button from "../components/atoms/Button";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-between overflow-hidden bg-brand-white">
      <div className="relative flex h-screen w-screen flex-col bg-brand-red">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.png"
            fill={true}
            style={{ objectFit: "cover" }}
            alt="hero-background"
          />
        </div>
        <Header page="Home" />
        <div className="relative flex grow flex-col items-center justify-center gap-y-[5.6875rem] px-[6.25rem]">
          <p className="text-center text-3xl text-brand-white">
            Vinio - the web application that takes the guesswork out of wine
            pairing!
          </p>
          <Button name="Try Vinio" />
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col">
        <div className="flex flex-1 items-center justify-center gap-x-[9.375rem] bg-brand-white px-[6.25rem] text-brand-red">
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
        <div className="flex flex-1 items-center justify-center bg-brand-blue p-[6.25rem] text-brand-white">
          <div className="flex h-full flex-1 items-center justify-center border-r border-brand-white p-[1rem]">
            <p className="text-center">
              Saves you time and money by helping you select the perfect bottle
              for any occasion.
            </p>
          </div>
          <div className="flex h-full flex-1 items-center justify-center border-r border-brand-white p-[1rem]">
            <p className="text-center">
              Provides an easy-to-use interface and spot-on recommendations,
              making you feel like an expert.
            </p>
          </div>
          <div className="flex h-full flex-1 items-center justify-center border-r border-brand-white p-[1rem]">
            <p className="text-center">
              Takes all the guesswork out of wine selection, providing
              recommendations based on the occasion.
            </p>
          </div>
          <div className="flex h-full flex-1 items-center justify-center p-[1rem]">
            <p className="text-center">
              Makes you feel confident in your wine selection, even if you're a
              beginner.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-y-[1.875rem] bg-brand-white px-[6.25rem] text-brand-blue">
          <p className="text-center leading-[1.6875rem]">
            Ready to experience the future of wine selection?
            <br />
            Head to our website and try Vinio today! Whether you're a seasoned
            wine enthusiast or just starting to explore the world of wine.
          </p>
          <Button name="Try Vinio" />
        </div>
        <div className="flex h-[2.0625rem] items-center justify-center bg-brand-blue px-[6.25rem] text-brand-white">
          <p className="text-s">
            © 2023 - 2023 www.vinio.com - All Rights Reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
