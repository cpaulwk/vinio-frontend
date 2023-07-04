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
        className="relative flex h-[90vh] w-screen flex-col bg-brand-red"
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
        className="flex min-h-screen w-screen flex-col"
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-[3.15rem] bg-brand-white text-brand-red md:flex-row">
          <div className="flex h-full w-full basis-1/2 flex-col items-center justify-center gap-[2rem] p-[1.25rem] md:items-start md:gap-[1rem] md:pl-[5rem]">
            <p className="text-l sm:text-xl">Personalized recommendations</p>
            <p>
              Gone are the days of feeling overwhelmed in the wine aisle or
              struggling to identify the perfect pairing for your meal. Vinio
              takes all the guesswork out of wine selection, providing
              personalized recommendations based on your individual taste
              preferences and the occasion.
            </p>
          </div>
          <div className="relative flex h-full w-full basis-1/2 justify-center ">
            <Image
              src="/images/dining_vibe.png"
              height={400}
              width={400}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                overflow: "hidden",
              }}
              alt="dining-vibe"
            />
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-[3.15rem] bg-brand-blue text-brand-white md:flex-row-reverse">
          <div className="flex h-full w-full basis-1/2 flex-col items-center justify-center gap-[2rem] p-[1.25rem] md:items-start md:gap-[1rem] md:pl-[5rem]">
            <p className="text-l sm:text-xl">Made for everyone</p>

            <p>
              And the best part? Our web application is accessible to everyone,
              not just those with a refined palate or extensive wine knowledge.
              Whether you're a seasoned wine enthusiast or just starting to
              explore the world of wine, Vinio is here to help you discover your
              new favorite bottle.
            </p>
          </div>
          <div className="relative flex h-full w-full basis-1/2 justify-center ">
            <Image
              src="/images/wine_pairing.png"
              height={400}
              width={400}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="wine-pairing"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center bg-brand-white  py-[1.25rem] text-brand-blue sm:px-[6.25rem]">
          <div className="flex flex-1 basis-full flex-col items-center gap-[1rem] border-brand-blue p-[1rem] md:basis-1/2 lg:basis-1/4 lg:border-r">
            <div className="flex basis-1/2 flex-col justify-end">
              <p className="text-center text-xl ">Convenient</p>
            </div>
            <p className="basis-1/2 text-center">
              Saves you time and money by helping you select the perfect bottle
              for any occasion.
            </p>
          </div>
          <div className="flex flex-1 basis-full flex-col items-center justify-center gap-[1rem] border-brand-blue p-[1rem] md:basis-1/2 lg:basis-1/4 lg:border-r">
            <div className="flex basis-1/2 flex-col justify-end">
              <p className="text-center text-xl ">User-friendly</p>
            </div>
            <p className="basis-1/2 text-center">
              Provides an easy-to-use interface and spot-on recommendations,
              making you feel like an expert.
            </p>
          </div>
          <div className="flex flex-1 basis-full flex-col items-center justify-center gap-[1rem] border-brand-blue p-[1rem] md:basis-1/2 lg:basis-1/4 lg:border-r">
            <div className="flex basis-1/2 flex-col justify-end">
              <p className="text-center text-xl ">Accuracy</p>
            </div>
            <p className="basis-1/2 text-center">
              Takes all the guesswork out of wine selection, providing
              insightful recommendations
            </p>
          </div>
          <div className="flex flex-1 basis-full flex-col items-center justify-center gap-[1rem] p-[1rem] md:basis-1/2 lg:basis-1/4">
            <div className="flex basis-1/2 flex-col justify-end">
              <p className="text-center text-xl ">Confidence</p>
            </div>
            <p className="basis-1/2 text-center">
              Makes you feel confident in your wine selection, even if you're a
              beginner.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-[3rem] bg-brand-red p-[3.125rem] text-brand-white">
          <div className="flex flex-col items-center justify-center gap-[1rem]">
            <p className="text-center">
              Ready to experience the future of wine selection?
            </p>
            <p className="text-center">
              Head to our website and try Vinio today! Whether you're a seasoned
              wine enthusiast or just starting to explore the world of wine.
            </p>
          </div>
          <Button name="Try Vinio" borderColor="white" />
        </div>
      </div>
    </main>
  );
}
