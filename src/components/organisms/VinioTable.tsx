import { ChangeEvent } from "react";

type VinioTableProps = {
  handleInputChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

export default function VinioTable({ handleInputChange }: VinioTableProps) {
  return (
    <section className="flex w-full grow flex-col items-center rounded border">
      <div className="flex h-[2.75rem] w-full border-b">
        <div className="flex grow items-center justify-center">
          <div className="justity-center flex flex-1 items-center gap-x-[0.75rem] px-[1.5rem]">
            <p>Wine</p>
            <button>⌄</button>
          </div>
          <div className="justity-center flex flex-1 items-center gap-x-[0.75rem] px-[1.5rem]">
            <p>Cheese</p>
            <button>⌄</button>
          </div>
        </div>
      </div>
      <div className="flex w-full grow">
        <div className="flex grow justify-center">
          <div className="flex flex-1 border-r">
            <input
              name="leftInput"
              className="w-full px-[1.5rem] py-[0.75rem]"
              type="text"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="flex flex-1">
            <input
              name="rightInput"
              className="w-full px-[1.5rem] py-[0.75rem]"
              type="text"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
