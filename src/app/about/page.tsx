"use client";

import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export default function About() {

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between bg-brand-white gap-y-[2rem]">
      <div className="absolute top-0">
      </div>
      <div className="flex w-screen flex-col">
        <Header page="About" />
        <div className="flex w-full gap-y-[2rem] flex-1 grow flex-col justify-center px-[6.25rem]">
          <div className="flex w-full justify-center gap-y-[1.25rem] text-brand-red">
            <p>
              Vinio is a web application created in 2023, aiming to help wine
              buyers make better wine choices to pair with the occasion.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-x-[4rem] gap-y-[2rem]">
            <div className="flex flex-col items-center gap-y-[1.25rem] ">
              <p className="text-brand-red text-l">Who am I ?</p>
              <p className="text-brand-blue">
                Hello, and thank you for visiting Vinio! My name is Paul Chow,
                and I am a wine enthusiast and self-taught web developer. I
                created this web application to help wine lovers discover new
                and exciting wine pairing based on their individual taste
                preferences.
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-[1.25rem]">
              <p className="text-brand-red text-l">Why Vinio?</p>
              <p className="text-brand-blue">
                As a wine enthusiast myself living in France, I know firsthand
                how overwhelming it can be to navigate the countless options
                available in the wine aisle. That's why I wanted to create a
                tool that would take all the guesswork out of wine selection and
                provide personalized recommendations based on the meal that will
                pair with the selected bottle.
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-[1.25rem]">
              <p className="text-brand-red text-l">One more thing...</p>
              <p className="text-brand-blue">
                But Vinio is more than just a tool for wine lovers - it's also a
                showcase of my skills as a full stack web developer. I'm excited
                to share my passion for wine with potential web developer
                recruiters, partners, and investors who may be interested in
                working with me on future projects.
              </p>
            </div>
          </div>
          <p className="text-brand-blue">
            Thank you for your interest in Vinio, and I look forward to
            connecting with you soon.
          </p>
          <p className="text-brand-blue">
            Feel free to visit my personal web page to see my other projects!
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
