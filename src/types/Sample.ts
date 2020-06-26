export interface SampleProps {
  label: string;
  name: string;
  options: SampleOption[];
  disabled?: boolean;
  value: string;
  placeholder?: string;
  onChange(value: string): void;
  onClear?(): void;
}

export interface SampleOption {
  value: string;
  label: string;
}
