import { useState, useEffect, useRef } from "react";
import ToggleListModal from "@/components/molecules/ToggleListModal";
import SearchInput from "@/components/molecules/SearchInput";
import { fetchAutocompleteData } from "@/utils/dataAutocompletion";

type VinioTableProps = {
  query: Query;
  setQuery: (input: Query) => void;
};

interface AutocompleteOptions {
  allOptions: Record<string, string[]>;
  leftOptions: string[];
  rightOptions: string[];
}

interface Query {
  leftQuery: string;
  rightQuery: string;
}

export default function VinioTable({ query, setQuery }: VinioTableProps) {
  const ulRef = useRef<HTMLUListElement>(null);

  const [toggleList, setToggleList] = useState<string | null>(null);
  const [condition, setCondition] = useState<{
    leftCondition: string;
    rightCondition: string;
  }>({
    leftCondition: "Grape Variety",
    rightCondition: "Cheese",
  });
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [autocompleteOptions, setAutocompleteOptions] =
    useState<AutocompleteOptions>({
      allOptions: {},
      leftOptions: [],
      rightOptions: [],
    });
  const [isListOpen, setIsListOpen] = useState<{
    leftSuggestion: boolean;
    rightSuggestion: boolean;
  }>({
    leftSuggestion: false,
    rightSuggestion: false,
  });
  const [label, setLabel] = useState<{ leftLabel: string; rightLabel: string }>(
    {
      leftLabel: "grape variety",
      rightLabel: "cheese",
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAutocompleteData();

      setAutocompleteOptions({
        allOptions: data,
        leftOptions: data.grapeVariety,
        rightOptions: data.cheese,
      });
    };

    fetchData();

    const handleClickOutside = (event: MouseEvent) => {
      if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
        setIsListOpen({ leftSuggestion: false, rightSuggestion: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (id: string, suggestion: string) => {
    const updatedQuery =
      id === "leftSuggestion"
        ? { ...query, leftQuery: suggestion }
        : { ...query, rightQuery: suggestion };

    const updatedIsListOpen =
      id === "leftSuggestion"
        ? { ...isListOpen, leftSuggestion: false }
        : { ...isListOpen, rightSuggestion: false };

    setQuery(updatedQuery);
    setIsListOpen(updatedIsListOpen);
  };

  const filterSuggestions = (inputValue: string, options: string[]) =>
    options.filter((suggestion: string) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );

  const handleSearchInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const leftSearchId = `${leftLabel[0].toLowerCase() + leftLabel.slice(1).replace(/(\s+)/g, "")
      }Search`;
    const rightSearchId = `${rightLabel[0].toLowerCase() + rightLabel.slice(1).replace(/(\s+)/g, "")
      }Search`;

    if (target.id === leftSearchId) {
      const filtered = filterSuggestions(
        query.leftQuery,
        autocompleteOptions.leftOptions
      );
      setFilteredSuggestions(filtered);
      setIsListOpen({
        leftSuggestion: true,
        rightSuggestion: false,
      });
    } else if (target.id === rightSearchId) {
      const filtered = filterSuggestions(
        query.rightQuery,
        autocompleteOptions.rightOptions
      );
      setFilteredSuggestions(filtered);
      setIsListOpen({
        leftSuggestion: false,
        rightSuggestion: true,
      });
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // const camelCasedLabel = label.leftLabel.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
    //   return index === 0 ? match.toLowerCase() : match.toUpperCase();
    // }).replace(/\s+/g, '');
    const isLeftInput =
      e.target.id ===
      `${label.leftLabel[0].toLowerCase() +
      label.leftLabel.slice(1).replace(/(\s+)/g, "")
      }Search`;

    const filtered = isLeftInput
      ? filterSuggestions(inputValue, autocompleteOptions.leftOptions)
      : filterSuggestions(inputValue, autocompleteOptions.rightOptions);

    setFilteredSuggestions(filtered);

    const updatedQuery = isLeftInput
      ? { ...query, leftQuery: e.target.value }
      : { ...query, rightQuery: e.target.value };

    const updatedIsListOpen = isLeftInput
      ? { ...isListOpen, leftSuggestion: true, rightSuggestion: false }
      : { ...isListOpen, leftSuggestion: false, rightSuggestion: true };

    setQuery(updatedQuery);
    setIsListOpen(updatedIsListOpen);
  };

  const handleToggleClick = (field: string) => {
    if (toggleList === field) {
      setToggleList(null);
    } else {
      setToggleList(field);
    }
  };

  const handleSelectionClick = (field: string) => {
    // const chosenField = field[0].toLowerCase() + field.slice(1).replace(/(\s+)/g, "");
    const chosenField = field
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, "");
    const updatedCondition =
      toggleList === "leftCondition"
        ? { ...condition, leftCondition: field }
        : { ...condition, rightCondition: field };

    const updatedLabel =
      toggleList === "leftCondition"
        ? { ...label, leftLabel: field }
        : { ...label, rightLabel: field };

    const updatedOptions =
      toggleList === "leftCondition"
        ? {
          ...autocompleteOptions,
          leftOptions: autocompleteOptions.allOptions[chosenField],
        }
        : {
          ...autocompleteOptions,
          rightOptions: autocompleteOptions.allOptions[chosenField],
        };

    const updatedQuery =
      toggleList === "leftCondition"
        ? { ...query, leftQuery: "" }
        : { ...query, rightQuery: "" };

    setCondition(updatedCondition);
    setToggleList(null);
    setLabel(updatedLabel);
    setAutocompleteOptions(updatedOptions);
    setQuery(updatedQuery)
  };

  const { leftCondition, rightCondition } = condition;
  const { leftLabel, rightLabel } = label;

  return (
    <section className="flex w-full flex-col items-center rounded border border-brand-blue bg-brand-blue">
      <div className="flex h-[2.75rem] w-full">
        <div className="flex grow items-center justify-center">
          <div className="justity-center flex flex-1 items-center px-[1.5rem]">
            <label
              id="leftCondition"
              className="flex items-center justify-between p-[0.5rem] text-brand-white hover:cursor-pointer"
              onClick={(e) => handleToggleClick(e.currentTarget.id)}
            >
              <p className="text-brand-white">{leftCondition}</p>
              <span className="ml-[0.75rem]">⌄</span>
            </label>
          </div>
          <div className="justity-center flex flex-1 items-center px-[1.5rem]">
            <label
              id="rightCondition"
              className="flex items-center justify-between p-[0.5rem] text-brand-white hover:cursor-pointer"
              onClick={(e) => handleToggleClick(e.currentTarget.id)}
            >
              <p className="text-brand-white">{rightCondition}</p>
              <span className="ml-[0.75rem]">⌄</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex grow justify-center bg-brand-white">
          <div className="relative flex flex-1 border-r border-brand-blue">
            {toggleList === "leftCondition" && (
              <ToggleListModal
                selectedCondition={leftCondition}
                onClick={handleSelectionClick}
              />
            )}
            <SearchInput
              id={leftLabel}
              value={query.leftQuery}
              label={leftLabel}
              suggestions={filteredSuggestions}
              isOpen={isListOpen.leftSuggestion}
              onClick={handleSearchInputClick}
              onChange={handleSearchInputChange}
              onSuggestionClick={(suggestion) =>
                handleSuggestionClick("leftSuggestion", suggestion)
              }
              ulRef={ulRef}
            />
          </div>
          <div className="relative flex flex-1">
            {toggleList === "rightCondition" && (
              <ToggleListModal
                selectedCondition={rightCondition}
                onClick={handleSelectionClick}
              />
            )}
            <SearchInput
              id={rightLabel}
              value={query.rightQuery}
              label={rightLabel}
              suggestions={filteredSuggestions}
              isOpen={isListOpen.rightSuggestion}
              onClick={handleSearchInputClick}
              onChange={handleSearchInputChange}
              onSuggestionClick={(suggestion) =>
                handleSuggestionClick("rightSuggestion", suggestion)
              }
              ulRef={ulRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
