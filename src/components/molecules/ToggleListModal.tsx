type ToggleListModalProps = {
  onClick: (arg: string) => void;
  selectedCondition: string;
};

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

export default function ToggleListModal({
  onClick,
  selectedCondition,
}: ToggleListModalProps) {
  return (
    <ul className="absolute left-[-1px] top-9 z-10 flex flex-col items-center justify-center rounded-b border border-brand-blue bg-brand-blue px-[1rem] py-[0.5rem] leading-normal text-brand-white">
      {conditionMappings.map((mapping) =>
        mapping.conditions.includes(selectedCondition)
          ? mapping.buttons.map((button) => (
            <li
              key={button.value}
              className="cursor-pointer"
              onClick={() => onClick(button.value)}
            >
              {button.label}
            </li>
          ))
          : null
      )}
    </ul>
  );
}
