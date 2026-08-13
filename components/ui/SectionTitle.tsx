type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-white
        "
      >
        {title}
      </h2>

      <div
        className="
          w-24
          h-1
          mt-4
          rounded-full
          bg-blue-500
        "
      />

      {subtitle && (
        <p
          className="
            max-w-2xl
            mt-6
            text-lg
            leading-8
            text-gray-400
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}