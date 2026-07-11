type SectionContainerProps = {
  id?: string;
  children: React.ReactNode;
};

export default function SectionContainer({
  id,
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className="
        w-full
        px-6
        md:px-12
        lg:px-24
        py-28
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
        {children}
      </div>
    </section>
  );
}