export default function AboutPage() {
  return (
    <div className="pt-20 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Brand identity NACHTBREKERS</h1>

      <img
          src="/images/nachtbrekers_logo.png"
          alt="Nachtbrekers logo"
          className="w-full h-auto rounded-lg"
        />

      <p className="text-gray-700">
        NACHTBREKERS is het nieuwe nachtprogramma van de Hall of Fame in Tilburg. Het ontwikkelen van de brand identity is een van mijn afstudeerprojecten geweest.
      </p>

      {/* Flexbox section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Links: tekst */}
        <div className="flex-1 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>

        {/* Midden: afbeelding */}
        <div className="flex-1">
        <img
          src="/images/nachtbrekers1.png"
          alt="Nachtbrekers visual"
          className="w-full h-auto rounded-lg shadow-md"
        />
        </div>

         {/* Rechts: afbeelding */}
         <div className="flex-1">
         <img
          src="/images/nachtbrekers2.png"
          alt="Nachtbrekers visual"
          className="w-full h-auto rounded-lg shadow-md"
        />
        </div>
      </div>
    </div>
  )
}
