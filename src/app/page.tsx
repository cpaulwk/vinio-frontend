"use client";
import { useRef } from "react";
import Header from "@/components/organisms/Header";
import Button from "@/components/atoms/Button";
import FeatureItem from "@/components/molecules/FeatureItem";
import SectionWithImage from "@/components/organisms/SectionWithImage";
import HeroBackground from "@/components/atoms/HeroBackground";

export default function Home() {
  const targetRef = useRef(null);

  return (
    <main className="flex w-screen flex-col items-center justify-between bg-brand-white">
      <div
        id="home"
        className="relative flex min-h-[90vh] w-screen flex-col bg-brand-red"
      >
        <HeroBackground imageSrc="/images/hero-background.png" />
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
        <SectionWithImage
          imageSrc="/images/dining_vibe.png"
          imageAlt="dining-vibe"
          bgColor="bg-brand-white"
          textColor="text-brand-red"
          title="Personalized recommendations"
          content="Gone are the days of feeling overwhelmed in the wine aisle or struggling to identify the perfect pairing for your meal. Vinio takes all the guesswork out of wine selection, providing personalized recommendations based on your individual taste preferences and the occasion."
        />
        <SectionWithImage
          imageSrc="/images/wine_pairing.png"
          imageAlt="wine-pairing"
          bgColor="bg-brand-blue"
          textColor="text-brand-white"
          title="Made for everyone"
          content="And the best part? Our web application is accessible to everyone, not just those with a refined palate or extensive wine knowledge. Whether you're a seasoned wine enthusiast or just starting to explore the world of wine, Vinio is here to help you discover your new favorite bottle."
          reverse
        />
        <div className="flex min-h-[30vh] flex-wrap items-center justify-center bg-brand-white  py-[1.25rem] text-brand-blue sm:px-[6.25rem]">
          <FeatureItem
            title="Convenient"
            content="Saves you time and money by helping you select the perfect bottle for any occasion."
          />
          <FeatureItem
            title="User-friendly"
            content="Provides an easy-to-use interface and spot-on recommendations, making you feel like an expert."
          />
          <FeatureItem
            title="Accuracy"
            content="Takes all the guesswork out of wine selection, providing insightful recommendations."
          />
          <FeatureItem
            title="Confidence"
            content="Makes you feel confident in your wine selection, even if you're a beginner."
          />
        </div>
        <div className="flex min-h-[30vh] w-full flex-col items-center justify-center gap-[3rem] bg-brand-red p-[3.125rem] text-brand-white">
          <div className="flex flex-col items-center justify-center gap-[1rem]">
            <p className="text-center">
              Ready to experience the future of wine selection?
            </p>
            <p className="text-center">
              Head to our website and try Vinio today! Whether you're a seasoned
              wine enthusiast or just starting to explore the world of wine.
            </p>
          </div>
          <Button name="Try Vinio" />
        </div>
      </div>
    </main>
  );
}
