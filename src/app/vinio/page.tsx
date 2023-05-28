"use client";

import Header from "../../components/organisms/Header";
import VinioTable from "../../components/organisms/VinioTable";
import SubmitButton from "../../components/atoms/SubmitButton";
import { ChangeEvent, useState } from "react";

export default function Vinio() {
  const [leftInput, setLeftInput] = useState<string>("");
  const [rightInput, setRightInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "leftInput") {
      setLeftInput(e.target.value);
    } else if (e.target.name === "rightInput") {
      setRightInput(e.target.value);
    }
  };

  console.log("leftInput => ", leftInput);
  console.log("rightInput => ", rightInput);

  const getSuggestion = async (): Promise<void> => {
    const requestData = {
      leftInput: leftInput,
    };

    try {
      const response = await fetch("http://localhost:3001/pairing/grape-variety", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();

      console.log("data => ", data.pairing);
    } catch (error) {
      console.error(error);
    }
  };

  const pair = (): void => {
    console.log("Clicked on Pair!");
    if (!leftInput || !rightInput) {
      console.log("Please fill both fields");
      return;
    }
  };

  return (
    <main className="flex w-screen flex-col  items-center justify-between overflow-hidden bg-brand-white">
      <div className="flex h-screen w-screen flex-col">
        <Header page="Vinio" />
        <div className="flex grow flex-col justify-center gap-y-[5.6875rem] p-[6.25rem]">
          <div className="flex grow flex-col items-center justify-center gap-y-[3.5rem]">
            <VinioTable handleInputChange={handleInputChange} />
            <div className="flex items-center justify-center gap-x-[2.75rem]">
              <SubmitButton
                name="Get Suggestion!"
                color="blue"
                handleClick={getSuggestion}
              />
              <SubmitButton name="Pair!" handleClick={pair} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
