import React, { ReactNode } from "react";

// Props for CheckboxForm
interface CheckboxFormProps<T> {
    values: T[];
    setValues: (values: T[]) => void;
    children: ReactNode;
}

// Props for CheckboxButton
interface CheckboxButtonProps<T> {
    value: T;
    selectedValues?: T[];
    onChange?: (value: T[]) => void;
    children: ReactNode;
    className?: string;
}

// CheckboxForm Component
export const CheckboxForm = <T,>({ values, setValues, children }: CheckboxFormProps<T>) => {
    return (
        <div className="flex w-full gap-4">
            {React.Children.map(children, (child) => {
                if (React.isValidElement<CheckboxButtonProps<T>>(child) && child.type === CheckboxButton) {
                    return React.cloneElement(child, {
                        selectedValues: values,
                        onChange: (newValues: T[]) => setValues(newValues),
                    });
                }
                return child;
            })}
        </div>
    );
};

// CheckboxButton Component
export const CheckboxButton = <T,>({
    value,
    selectedValues = [],
    onChange,
    children,
    className,
}: CheckboxButtonProps<T>) => {
    const isSelected = selectedValues.includes(value);

    const handleClick = () => {
        const newValues = isSelected
            ? selectedValues.filter((v) => v !== value) // Remove if already selected
            : [...selectedValues, value]; // Add if not selected

        onChange && onChange(newValues);
    };

    return (
        <div
            onClick={handleClick}
            className={`flex w-1/3 gap-1 border px-2 rounded-xl justify-between py-2 cursor-pointer hover:border-blue-300 hover:bg-secondary  ${isSelected ? "border-third-light bg-blue-50 hover:border-third-light hover:bg-blue-50" : "border-gray-300"
                } ${className}`}
        >
            <span className="flex gap-2 justify-start items-center">{children}</span>
            <div className="h-4 w-4">
                <span
                    className={`h-[15px] w-[15px]  border flex justify-center items-center ${isSelected ? "bg-third-light" : "border-gray-300"
                        }`}
                >
                    {isSelected && <span className="h-[5px] w-[5px] bg-white"></span>}
                </span>
            </div>
        </div>
    );
};
