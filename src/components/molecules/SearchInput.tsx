import React, { useState } from "react";

interface Query {
  leftQuery: string;
  rightQuery: string;
}

interface SearchInputProps {
  id: string;
  name: string;
  allSuggestions: Record<string, string[]>;
  query: Query;
  setQuery: (input: Query) => void;
}

export default function SearchInput({
  id,
  name,
  allSuggestions,
  query,
  setQuery,
}: SearchInputProps) {
  const [currentInput, setCurrentInput] = useState<string | null>(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const getInputValue = () => {
    if (name === "leftQuery") {
      return query.leftQuery;
    } else if (name === "rightQuery") {
      return query.rightQuery;
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery({ ...query, [name]: suggestion });
    // setOpenSuggestion({ openSuggestion: null });
    setCurrentInput(null);
  };

  const handleOnBlur = () => {
    // setOpenSuggestion({ openSuggestion: null });
    setCurrentInput(null);
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setFilteredSuggestions(allSuggestions[e.currentTarget.id]);
    // setOpenSuggestion({ openSuggestion: e.currentTarget.id });
    setCurrentInput(e.currentTarget.id);
  };

  const filterSuggestions = (inputValue: string, options: string[]) => {
    return options.filter((suggestion: string) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = filterSuggestions(
      e.target.value,
      allSuggestions[e.target.id]
    );
    setFilteredSuggestions(filtered);
    setQuery({ ...query, [name]: e.target.value });

    if (!filtered.length) {
      // setOpenSuggestion({ openSuggestion: null });
      setCurrentInput(null);
    } else {
      // setOpenSuggestion({ openSuggestion: e.currentTarget.id });
      setCurrentInput(e.currentTarget.id);
    }
  };

  const searchInputId = id
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    })
    .replace(/\s+/g, "");

  return (
    <div className="relative flex flex-1">
      <input
        id={searchInputId}
        type="text"
        value={getInputValue()}
        onChange={handleOnChange}
        placeholder={`Type a ${id.toLowerCase()}`}
        className="w-full rounded-b border border-brand-white px-4 py-2 focus:outline-none"
        onClick={handleInputClick}
        onBlur={handleOnBlur}
      />
      {currentInput && filteredSuggestions && (
        <ul
          className="border-gray-300 absolute top-12 flex max-h-[15rem] flex-col overflow-scroll rounded-md border bg-brand-white"
          onMouseDown={(e) => e.preventDefault()}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 cursor-pointer px-4 py-2 hover:bg-brand-blue/5"
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
