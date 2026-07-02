import { aboutData, aboutHighlights } from "@/data/about";
import HighlightCard from "@/components/ui/HighlightCard";

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

                <h2 className="text-5xl font-bold text-white">
                    {aboutData.title}
                </h2>

                <div className="w-28 h-1 bg-blue-500 rounded-full mt-4 mb-10" />

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
                            emoji={item.emoji}
                            title={item.title}
                        />

                    ))}

                </div>

            </div>
        </section>
    );
}