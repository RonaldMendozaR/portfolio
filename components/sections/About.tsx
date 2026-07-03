import HighlightCard from "@/components/ui/HighlightCard";
import { aboutData, aboutHighlights } from "@/data/about";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        px-24
        py-32
      "
    >
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
    </section>
  );
}