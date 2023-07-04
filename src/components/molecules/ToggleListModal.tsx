type ToggleListModalProps = {
  onClick: (arg: string) => void;
  selectedCondition: string;
  ulRef: React.RefObject<HTMLUListElement>;
};

export default function ToggleListModal({
  onClick,
  selectedCondition,
  ulRef,
}: ToggleListModalProps) {
  const conditionMappings = [
    {
      conditions: ["Appellation", "Grape Variety"],
      buttons: [
        { label: "Appellation", value: "Appellation" },
        { label: "Grape Variety", value: "Grape Variety" },
      ],
    },
    {
      conditions: ["Cheese", "Meat"],
      buttons: [
        { label: "Cheese", value: "Cheese" },
        { label: "Meat", value: "Meat" },
      ],
    },
  ];

  return (
    <ul
      ref={ulRef}
      className="absolute left-[-1px] top-0 z-10 flex flex-col rounded-b border border-brand-blue bg-brand-blue px-[0.75rem] py-[0.5rem] text-brand-white"
    >
      {conditionMappings.map((mapping) =>
        mapping.conditions.includes(selectedCondition)
          ? mapping.buttons.map((button) => (
            <li
              className="cursor-pointer"
              key={button.value} onClick={() => onClick(button.value)}>
              {button.label}
            </li>
          ))
          : null
      )
      }
    </ul >
  );
}
