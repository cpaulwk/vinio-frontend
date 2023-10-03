import { useState, useEffect, useRef, useMemo } from "react";
import ToggleListModal from "@/components/molecules/ToggleListModal";
import SearchInput from "@/components/molecules/SearchInput";
import { fetchAutocompleteData } from "@/utils/dataAutocompletion";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type VinioTableSuggestionProps = {
  query: Query;
  setQuery: (input: Query) => void;
  isSuggesting: boolean;
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

export default function VinioTableSuggestion({
  query,
  setQuery,
  isSuggesting,
}: VinioTableSuggestionProps) {
  const [condition, setCondition] = useState<{ [key: string]: string }>({
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState("leftCondition");
  const [selectedCondition, setSelectedCondition] = useState("leftCondition");

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const parentContainerRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonClickedRef = useRef(false);
  const [buttonStates, setButtonStates] = useState<{ [key: string]: boolean }>({
    leftCondition: false,
    rightCondition: false,
  });

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

  const handleToggleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const field = event.currentTarget.id;

    setSelectedCondition(field);

    if (isModalOpen && field !== modalRoot) {
      setModalRoot(field);
      toggleButtonClickedRef.current = true;

      setButtonStates((prevStates) => ({
        ...Object.keys(prevStates).reduce((states, key) => {
          states[key] = key === field ? !prevStates[key] : false;
          return states;
        }, {} as { [key: string]: boolean }),
      }));
    } else {
      setModalRoot(field);
      setIsModalOpen(!isModalOpen);
      setButtonStates((prevStates) => ({
        ...prevStates,
        [field]: !prevStates[field],
      }));
    }

    buttonRef.current = event.currentTarget;

    const parentNode = event.currentTarget.parentNode;

    if (parentNode) {
      parentContainerRef.current = parentNode as HTMLDivElement;
    }
  };

  const handleSelectionClick = (field: string) => {
    const chosenField = field
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      })
      .replace(/\s+/g, "");

    const updatedCondition = {
      ...condition,
      [selectedCondition]: field,
    };

    const updatedOptions = {
      ...autocompleteOptions,
      [selectedCondition === "leftCondition" ? "leftOptions" : "rightOptions"]:
        autocompleteOptions.allOptions[chosenField],
    };

    const clearedQuery = {
      ...query,
      [selectedCondition === "leftCondition" ? "leftQuery" : "rightQuery"]: "",
    };

    setIsModalOpen(false);
    setCondition(updatedCondition);
    setAutocompleteOptions(updatedOptions);
    setQuery(clearedQuery);
  };

  const { leftCondition } = condition;

  const handleSelectedCondition = () => {
    if (selectedCondition === "leftCondition") {
      return condition.leftCondition;
    } else {
      return condition.rightCondition;
    }
  };

  const modalContent = useMemo(() => {
    if (parentContainerRef.current) {
      return createPortal(
        <ToggleListModal
          selectedCondition={handleSelectedCondition()}
          onClick={handleSelectionClick}
          isSuggesting={isSuggesting}
        />,
        parentContainerRef.current
      );
    }
    return null;
  }, [
    parentContainerRef.current,
    handleSelectedCondition,
    handleSelectionClick,
  ]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        event.target !== buttonRef.current &&
        !toggleButtonClickedRef.current
      ) {
        setIsModalOpen(false);
        setButtonStates({
          leftCondition: false,
          rightCondition: false,
        });
      }
      toggleButtonClickedRef.current = false;
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <section className="flex w-full flex-col items-center border border-brand-blue bg-brand-blue sm:rounded">
      <div className="flex h-[2.75rem] w-full">
        <div className="flex grow items-center justify-center">
          {["leftCondition"].map((field) => (
            <div
              key={field}
              ref={parentContainerRef}
              className={`relative flex flex-1 items-center justify-center px-[1.5rem] max-xs:hidden`}
            >
              <button
                id={field}
                ref={buttonRef}
                className="z-50 flex items-end justify-center leading-none text-brand-white hover:cursor-pointer sm:justify-start sm:p-[0.5rem]"
                onClick={handleToggleClick}
              >
                {condition[field]}
                <FontAwesomeIcon
                  className="ml-1 h-[15px]"
                  icon={buttonStates[field] ? faChevronUp : faChevronDown}
                  style={{ color: "#f8fdfd" }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex grow justify-center bg-brand-white">
          {/*
          {["leftQuery", "rightQuery"].map((field) => (
            <div
              key={field}
              className={`relative flex flex-1 border-r border-brand-blue max-xs:hidden`}
            >
              <SearchInput
                id={label[field]}
                name={field}
                allSuggestions={autocompleteData}
                query={query}
                setQuery={setQuery}
              />
            </div>
          ))}
          */}
          <div
            className={`relative flex flex-1 border-r border-brand-blue max-xs:hidden`}
          >
            <SearchInput
              id={leftCondition}
              name="leftQuery"
              allSuggestions={autocompleteData}
              query={query}
              setQuery={setQuery}
            />
          </div>
        </div>
      </div>
      {isModalOpen && modalContent}
    </section>
  );
}
