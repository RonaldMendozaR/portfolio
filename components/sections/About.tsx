import { heroData } from "@/data/hero";


export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex py-32 justify-center px-24"
    >

        
      <div className="max-w-4xl">

        <h2 className="text-5xl font-bold mb-3"> 
          Sobre mí
          
        </h2 >
        <div className="w-28 h-1 bg-blue-500 rounded-full mb-8"></div>
        

        <p
          className="
            text-gray-400
            text-lg
            leading-9
          "
        >
          {heroData.aboutDescription}
        </p>
        
        
      </div>

      
    </section>
  );
}