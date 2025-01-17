
import { DayPicker, DayPickerProps } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function Calendar(props: DayPickerProps) {
  return (
    <DayPicker
      className="p-4 bg-white rounded-md shadow-md border"
      {...props}
    />
  );
}
