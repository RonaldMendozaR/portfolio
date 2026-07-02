import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-24"
    >
        

      <div className="max-w-5xl">

        <h2 className="text-5xl font-bold mb-8"> 
          Sobre mí
          
        </h2 >
        <div className="w-52 h-1 bg-blue-500 rounded-full mb-8"></div>
        

        <p
          className="
            text-gray-400
            text-lg
            leading-9
          "
        >
          {personalInfo.description}
        </p>
        

      </div>
    </section>
  );
}