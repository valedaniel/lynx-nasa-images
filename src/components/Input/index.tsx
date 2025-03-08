import './input.css';

interface InputProps {
  onChangeText: (text: string) => void;
  value?: string;
  placeholder?: string;
}

export function Input({ onChangeText, value, placeholder }: InputProps) {
  return (
    <input
      //@ts-ignore
      bindinput={(event) => onChangeText(event.detail.value)}
      value={value}
      placeholder={placeholder}
    />
  );
}
