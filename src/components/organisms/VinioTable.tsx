import { useState, useEffect, useRef } from "react";
import ToggleListModal from "@/components/molecules/ToggleListModal";
import SearchInput from "@/components/molecules/SearchInput";
import { fetchAutocompleteData } from "@/utils/dataAutocompletion";
import { createPortal } from "react-dom";

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
  const [condition, setCondition] = useState<{
    leftCondition: string;
    rightCondition: string;
  }>({
    leftCondition: "Grape Variety",
    rightCondition: "Cheese",
  });
  const [autocompleteData, setAutocompleteData] = useState({});
  const [autocompleteOptions, setAutocompleteOptions] =
    useState<AutocompleteOptions>({
      allOptions: {},
      leftOptions: [],
      rightOptions: [],
    });
  const [label, setLabel] = useState<{ leftLabel: string; rightLabel: string }>(
    {
      leftLabel: "grape variety",
      rightLabel: "cheese",
    }
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState("leftCondition");
  const [selectedCondition, setSelectedCondition] = useState("leftCondition");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAutocompleteData();
      setAutocompleteData(data);
      setAutocompleteOptions({
        allOptions: data,
        leftOptions: data.grapeVariety,
        rightOptions: data.cheese,
      });
    };

    fetchData();
  }, []);

  const toggleButtonClickedRef = useRef(false);

  const handleToggleClick = (field: string) => {
    setSelectedCondition(field);

    if (isModalOpen && field !== modalRoot) {
      setModalRoot(field);
      toggleButtonClickedRef.current = true;
    } else {
      setModalRoot(field);
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleSelectionClick = (field: string) => {
    const chosenField = field
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, "");
    const updatedCondition =
      selectedCondition === "leftCondition"
        ? { ...condition, leftCondition: field }
        : { ...condition, rightCondition: field };

    const updatedLabel =
      selectedCondition === "leftCondition"
        ? { ...label, leftLabel: field }
        : { ...label, rightLabel: field };

    const updatedOptions =
      selectedCondition === "leftCondition"
        ? {
          ...autocompleteOptions,
          leftOptions: autocompleteOptions.allOptions[chosenField],
        }
        : {
          ...autocompleteOptions,
          rightOptions: autocompleteOptions.allOptions[chosenField],
        };

    const clearedQuery =
      selectedCondition === "leftCondition"
        ? { ...query, leftQuery: "" }
        : { ...query, rightQuery: "" };

    setIsModalOpen(false);
    setCondition(updatedCondition);
    setLabel(updatedLabel);
    setAutocompleteOptions(updatedOptions);
    setQuery(clearedQuery);
  };

  const { leftCondition, rightCondition } = condition;
  const { leftLabel, rightLabel } = label;

  // const modalContentEl = document.getElementById(modalRoot);

  const handleSelectedCondition = () => {
    if (selectedCondition === "leftCondition") {
      return condition.leftCondition;
    } else {
      return condition.rightCondition;
    }
  };

  // const modalContent =
  //   modalContentEl !== null
  //     ? createPortal(
  //       <ToggleListModal
  //         selectedCondition={handleSelectedCondition()}
  //         onClick={handleSelectionClick}
  //       />,
  //       modalContentEl
  //     )
  //     : null;

  // useEffect(() => {
  //   const handleOutsideClick = (event: MouseEvent) => {
  //     if (event.target !== modalContentEl && !toggleButtonClickedRef.current) {
  //       setIsModalOpen(false);
  //     }
  //     toggleButtonClickedRef.current = false;
  //   };
  //   document.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [isModalOpen]);

  return (
    <section className="flex w-full flex-col items-center border border-brand-blue bg-brand-blue sm:rounded">
      <div className="flex h-[2.75rem] w-full">
        <div className="flex grow items-center justify-center">
          <div
            className={`flex flex-1 items-center max-xs:hidden sm:px-[1.5rem]`}
          >
            <button
              id="leftCondition"
              className="relative z-50 flex items-center justify-center text-brand-white hover:cursor-pointer sm:justify-start sm:p-[0.5rem]"
              onClick={(e) => handleToggleClick(e.currentTarget.id)}
            >
              {leftCondition} ⌄
            </button>
          </div>
          <div
            className={`flex flex-1 items-center max-xs:hidden sm:px-[1.5rem]`}
          >
            <button
              id="rightCondition"
              className="relative z-50 flex items-center justify-center text-brand-white hover:cursor-pointer sm:justify-start sm:p-[0.5rem]"
              onClick={(e) => handleToggleClick(e.currentTarget.id)}
            >
              {rightCondition} ⌄
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex grow justify-center bg-brand-white">
          <div
            className={`relative flex flex-1 border-r border-brand-blue max-xs:hidden`}
          >
            <SearchInput
              id={leftLabel}
              name="leftQuery"
              allSuggestions={autocompleteData}
              query={query}
              setQuery={setQuery}
            />
          </div>
          <div className={`relative flex flex-1 max-xs:hidden`}>
            <SearchInput
              id={rightLabel}
              name="rightQuery"
              allSuggestions={autocompleteData}
              query={query}
              setQuery={setQuery}
            />
          </div>
        </div>
      </div>
      {/* isModalOpen && modalContent */}
    </section>
  );
}
