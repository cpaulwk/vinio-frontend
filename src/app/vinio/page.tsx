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
  const [results, setResults] = useState<Product[] | null | string>(null);
  const [otherSuggestions, setOtherSuggestions] = useState<
    OtherSuggestions[] | null
  >(null);
  const [query, setQuery] = useState({ leftQuery: "", rightQuery: "" });
  const [isSuggesting, setIsSuggesting] = useState(false);

  const getSuggestion = async (): Promise<void> => {
    setIsSuggesting(true);
    const requestData = {
      grape_variety: query.leftQuery,
    };

    try {
      const response1 = await fetch(
        "http://localhost:3001/pairing/grape-variety",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const data1 = await response1.json();
      setResults(data1.pairing);

      const response2 = await fetch(
        "http://localhost:3001/pairing/additional-suggestion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const data2 = await response2.json();
      setOtherSuggestions(data2.pairing);

    } catch (error) {
      console.error(error);
    }
  };

  const pair = async (): Promise<void> => {
    setIsSuggesting(false);
    if (!query.leftQuery && !query.rightQuery) {
      setResults([]);
      return;
    }

    if (!query.leftQuery || !query.rightQuery) {
      setResults("Please fill both fields to pair");
      return;
    }

    const requestData = {
      grape_variety: query.leftQuery,
      product: query.rightQuery,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/pairing/pairing-result",
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
  };

  return (
    <main className="flex w-screen flex-col  items-center justify-between bg-brand-white">
      <div className="flex h-screen w-screen flex-col">
        <Header page="Vinio" />
        <div className="flex grow flex-col justify-center gap-y-[5.6875rem] p-[6.25rem]">
          <div className="flex grow flex-col items-center justify-center gap-y-[3.5rem]">
            <VinioTable setQuery={setQuery} query={query} />
            {results?.length !== 0 ? (
              <Results results={results} otherSuggestions={otherSuggestions} isSuggesting={isSuggesting} />
            ) : (
              <ErrorMessage />
            )}
            <div className="flex flex-col items-center justify-center gap-[2.75rem] sm:flex-row">
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
