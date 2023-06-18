import React from "react";

interface SearchInputProps {
  id: string;
  value: string;
  label: string;
  suggestions: string[];
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSuggestionClick: (suggestion: string) => void;
  ulRef: React.RefObject<HTMLUListElement>;
}

export default function SearchInput({
  id,
  value,
  label,
  suggestions,
  isOpen,
  onClick,
  onChange,
  onSuggestionClick,
  ulRef,
}: SearchInputProps) {
  const handleSuggestionClick = (suggestion: string) => {
    onSuggestionClick(suggestion);
  };

  return (
    <div className="relative flex flex-1">
      <input
        id={`${id[0].toLowerCase() + id.slice(1).replace(/(\s+)/g, "")}Search`}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={`Write your ${label.toLowerCase()} here...`}
        className="w-full rounded-br border border-brand-white px-4 py-2 focus:outline-none"
        onClick={onClick}
      />
      {isOpen && (
        <ul
          ref={ulRef}
          className="border-gray-300 absolute top-12 flex max-h-[15rem] flex-col overflow-scroll rounded-md border bg-brand-white"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 hover:bg-brand-blue/5 cursor-pointer px-4 py-2"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
