import type { TextInputProps } from "../../types";

// just renders text area and notifies when text changes
export default function TextInput({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}: TextInputProps) {
  return (
    <div className="w-full pt-2">
      <textarea
        className="w-full bg-slate-200 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
}
