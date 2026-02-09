export default function AboutPage() {
  return (
    <div className="pt-20 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">About Us</h1>

      <p className="text-gray-700">
        We are a company dedicated to providing the best solutions for your needs.
        Our team is passionate about creating modern, scalable, and user-friendly applications.
      </p>

      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Innovative technology</li>
        <li>Professional team</li>
        <li>Customer satisfaction</li>
      </ul>

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

        {/* Rechts: afbeelding */}
        <div className="flex-1">
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="Placeholder"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  )
}
