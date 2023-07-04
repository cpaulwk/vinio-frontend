"use client";

import Header from "@/components/organisms/Header";
import VinioTable from "@/components/organisms/VinioTable";
import SubmitButton from "@/components/atoms/SubmitButton";
import { useState } from "react";
import Results from "@/components/organisms/Results";
import ErrorMessage from "@/components/organisms/ErrorMessage";

interface Product {
  product_id: number;
  product: string;
  parent_id: number;
}

interface OtherSuggestions {
  grape_variety: string;
}

export default function Vinio() {
  const [results, setResults] = useState<Product[] | null | string>("");
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [otherSuggestions, setOtherSuggestions] = useState<
    OtherSuggestions[] | null
  >(null);
  const [query, setQuery] = useState({ leftQuery: "", rightQuery: "" });
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getSuggestion = async (): Promise<void> => {
    if (!query.leftQuery) {
      setErrorMessage("Please indicate a grape variety for suggestions");
      setIsLoading(false);
      setResults("");
      setIsSuggesting(false);
      return;
    }

    setIsLoading(true);
    setIsSuggesting(true);
    const requestData = {
      grape_variety: query.leftQuery,
    };

    try {
      const suggestions = await fetch(
        `${NEXT_PUBLIC_BACKEND_URL}/pairing/grape-variety`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const suggestionsResult = await suggestions.json();
      setResults(suggestionsResult.pairing);

      if (!suggestionsResult.pairing.length) {
        setErrorMessage("");
        setResults("");
        setIsLoading(false);
      }

      const additionalSuggestions = await fetch(
        `${NEXT_PUBLIC_BACKEND_URL}/pairing/additional-suggestion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const additionalSuggestionsResult = await additionalSuggestions.json();
      setOtherSuggestions(additionalSuggestionsResult.pairing);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const pair = async (): Promise<void> => {
    setIsLoading(true);
    setIsSuggesting(false);

    if (!query.leftQuery || !query.rightQuery) {
      setErrorMessage("Please fill both fields to pair");
      setResults("");
      setIsLoading(false);
      return;
    }

    const requestData = {
      grape_variety: query.leftQuery,
      product: query.rightQuery,
    };

    try {
      const response = await fetch(
        `${NEXT_PUBLIC_BACKEND_URL}/pairing/pairing-result`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const data = await response.json();

      if (data.pairing.length) {
        if (data.pairing[0].excellent_pairing) {
          setResults("It's an excellent pairing!");
        } else {
          setResults("It's a good match");
        }
      } else {
        setResults("There are better pairing options");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <main className="flex w-screen flex-col items-center justify-between bg-brand-white">
      <div className="flex h-screen w-screen flex-col">
        <Header page="Vinio" />
        <div className="flex h-full flex-col items-center gap-y-[2rem] sm:gap-y-[5.6875rem] md:p-[4.53125rem]">
          <div className="flex w-full basis-4/5 flex-col items-center justify-center gap-y-[3.5rem]">
            <VinioTable setQuery={setQuery} query={query} />
            {!isLoading ? (
              results ? (
                <Results
                  results={results}
                  otherSuggestions={otherSuggestions}
                  isSuggesting={isSuggesting}
                />
              ) : (
                <ErrorMessage errorMessage={errorMessage} />
              )
            ) : (
              <section className="h-min-[2.75rem] flex w-full flex-1 flex-col items-center justify-center border-brand-blue bg-brand-white text-brand-white sm:rounded"></section>
            )}
          </div>
          <div className="flex basis-1/5 flex-col items-center justify-center gap-[2.75rem] pb-[1rem] sm:flex-row">
            <SubmitButton
              name="Get Suggestion!"
              color="blue"
              handleClick={getSuggestion}
            />
            <SubmitButton name="Pair!" handleClick={pair} />
          </div>
        </div>
      </div>
    </main>
  );
}
