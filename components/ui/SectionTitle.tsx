type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16">
      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>

      <div className="mt-4 mb-6 h-1 w-32 rounded-full bg-blue-500"></div>

      {subtitle && (
        <p className="max-w-2xl text-lg text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}