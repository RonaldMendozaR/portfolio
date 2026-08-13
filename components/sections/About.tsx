import SectionLayout from "@/components/layout/SectionLayout";
import HighlightCard from "@/components/ui/HighlightCard";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <SectionLayout
      id="about"
      title={aboutData.title}
      subtitle={aboutData.subtitle}
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        {/* Descripción */}
        <div>
          <p
            className="
              text-lg
              leading-9
              text-gray-400
            "
          >
            {aboutData.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {aboutData.highlights.map((item) => (
            <HighlightCard
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>

      </div>
    </SectionLayout>
  );
}