import React, { ReactNode } from "react";

// Props for RadioForm
interface RadioFormProps {
  value: any;
  setValue: (value: any) => void;
  children: ReactNode;
}

// Props for RadioButton
interface RadioButtonProps {
  value: any;
  selectedValue?: any;
  onChange?: (value: any) => void;
  children: ReactNode;
}

// RadioForm Component
export const RadioForm = ({ value, setValue, children }: RadioFormProps) => {
  return (
    <div className="flex w-full gap-4   ">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioButtonProps>(child) && child.type === RadioButton) {
          return React.cloneElement(child, {
            selectedValue: value,
            onChange: setValue,
          });
        }
        return child;
      })}
    </div>
  );
};

// RadioButton Component
export const RadioButton = ({ value, selectedValue, onChange, children }: RadioButtonProps) => {
  const isSelected = value === selectedValue;

  return (
    <div
      onClick={() => onChange && onChange(value)}
      className={`flex items-center gap-2 border px-4 rounded-xl justify-between w-1/3 py-2 cursor-pointer hover:border-blue-300 hover:bg-secondary ${
        isSelected ? "border-third-light bg-blue-50 hover:border-third-light hover:bg-blue-50" : "border-gray-300"
      }`}
    >
      <span className="flex gap-2 w-5/6 text-[14px] font-semibold text-textsecondary justify-start items-center">{children}</span>
      <span
        className={`h-4 w-4 rounded-full border flex justify-center items-center ${
          isSelected ? "bg-third-light" : "border-gray-300"
        }`}
      >
        <span className={`${isSelected ? "h-[6px] w-[6px] rounded-full bg-white ": ""}`}></span>
      </span>
    </div>
  );
};
