"use client";
import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/organisms/Header";
import Button from "@/components/atoms/Button";

export default function Home() {
  const targetRef = useRef(null);

  return (
    <main className="flex w-screen flex-col items-center justify-between bg-brand-white">
      <div
        id="home"
        className="relative flex min-h-[90vh] w-screen flex-col bg-brand-red"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.png"
            fill={true}
            style={{ objectFit: "cover" }}
            alt="hero-background"
          />
        </div>
        <Header page="Home" targetRef={targetRef} />
        <div className="relative flex grow flex-col items-center justify-center gap-y-[5.6875rem] px-[6.25rem]">
          <p className="text-center text-xl text-brand-white xl:text-3xl">
            Vinio - the web application that takes the guesswork out of wine
            pairing!
          </p>
          <Button name="Try Vinio" />
        </div>
      </div>
      <div
        id="what-is-vinio"
        ref={targetRef}
        className="flex h-screen w-screen flex-col"
      >
        <div className="flex w-full basis-4/12 items-center justify-center gap-x-[9.375rem] bg-brand-white px-[6.25rem] py-[1.25rem] text-brand-red">
          <div className="flex h-full w-full basis-1/2 flex-col justify-center gap-[1rem]">
            <p className="text-xl">Personalized Recommendations</p>
            <p>
              Gone are the days of feeling overwhelmed in the wine aisle or
              struggling to identify the perfect pairing for your meal. Vinio
              takes all the guesswork out of wine selection, providing
              personalized recommendations based on your individual taste
              preferences and the occasion.
            </p>
          </div>
          <div className="flex h-full w-full basis-1/2 flex-col justify-center gap-[1rem]">
            <p className="text-xl">Made for everyone</p>

            <p>
              And the best part? Our web application is accessible to everyone,
              not just those with a refined palate or extensive wine knowledge.
              Whether you're a seasoned wine enthusiast or just starting to
              explore the world of wine, Vinio is here to help you discover your
              new favorite bottle.
            </p>
          </div>
        </div>
        <div className="flex basis-3/12 items-center justify-center bg-brand-blue px-[6.25rem] py-[1.25rem] text-brand-white">
          <div className="flex h-full flex-1 flex-col items-center gap-[1rem] border-r border-brand-white p-[1rem]">
            <div className="flex basis-1/2 flex-col justify-end">
              <p className="text-center text-xl ">Convenient</p>
            </div>
            <p className="basis-1/2 text-center">
              Saves you time and money by helping you select the perfect bottle
              for any occasion.
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-[1rem] border-r border-brand-white p-[1rem]">
            <div className="flex basis-1/2 flex-col justify-end">
              <p className="text-center text-xl ">User-friendly</p>
            </div>
            <p className="basis-1/2 text-center">
              Provides an easy-to-use interface and spot-on recommendations,
              making you feel like an expert.
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-[1rem] border-r border-brand-white p-[1rem]">
            <div className="flex basis-1/2 flex-col justify-end">
              <p className="text-center text-xl ">Accuracy</p>
            </div>
            <p className="basis-1/2 text-center">
              Takes all the guesswork out of wine selection, providing
              insightful recommendations
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-[1rem] border-brand-white p-[1rem]">
            <div className="flex basis-1/2 flex-col justify-end">
              <p className="text-center text-xl ">Confidence</p>
            </div>
            <p className="basis-1/2 text-center">
              Makes you feel confident in your wine selection, even if you're a
              beginner.
            </p>
          </div>
        </div>
        <div className="flex h-full basis-5/12 flex-col items-center justify-center gap-[3rem] border-r border-brand-white p-[1rem]">
          <p className="text-center leading-[1.6875rem]">
            Ready to experience the future of wine selection?
            <br />
            Head to our website and try Vinio today! Whether you're a seasoned
            wine enthusiast or just starting to explore the world of wine.
          </p>
          <Button name="Try Vinio" />
        </div>
      </div>
    </main>
  );
}
