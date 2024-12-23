interface InterestTagProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function InterestTag({ label, selected, onClick }: InterestTagProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
        ${
          selected
            ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
    >
      {label}
    </button>
  );
}
