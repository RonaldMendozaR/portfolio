import SectionContainer from "./SectionContainer";
import SectionTitle from "../ui/SectionTitle";

type SectionLayoutProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function SectionLayout({
  id,
  title,
  subtitle,
  children,
}: SectionLayoutProps) {
  return (
    <SectionContainer id={id}>
      <SectionTitle
        title={title}
        subtitle={subtitle}
      />

      <div className="mt-12">
        {children}
      </div>
    </SectionContainer>
  );
}