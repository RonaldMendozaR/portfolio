import HighlightCard from "@/components/ui/HighlightCard";
import { aboutData, aboutHighlights } from "@/data/about";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionContainer from "../layout/SectionContainer";

export default function About() {
  return (
    <SectionContainer id="about">
      <div className="max-w-5xl mx-auto">

        <SectionTitle
            title={aboutData.title}
        />

        <p
          className="
            max-w-3xl
            text-lg
            leading-9
            text-gray-400
          "
        >
          {aboutData.description}
        </p>

        <div
          className="
            grid
            grid-cols-2
            gap-6
            mt-14
          "
        >
          {aboutHighlights.map((item) => (
            <HighlightCard
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>

      </div>
    </SectionContainer>
  );
}