type TechnologyTagProps = {
  name: string;
};

export default function TechnologyTag({
  name,
}: TechnologyTagProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-slate-700
        bg-slate-800
        px-3
        py-1.5
        text-sm
        text-gray-300
      "
    >
      {name}
    </span>
  );
}