export default function AboutInput({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-x-4 items-center">
      <label htmlFor="" className="w-[30%] text-white opacity-30">
        {label}
      </label>
      {children}
    </div>
  );
}
