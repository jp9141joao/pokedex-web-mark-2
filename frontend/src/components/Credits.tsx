export default function Credits() {
  // Footer component to display creator credit with a link to LinkedIn
  return (
    <footer className="max-w-[1536px] grid mt-6">
      {/* 
        Displays a centered heading with creator credit.
        Responsive text sizes: 
        - base for default
        - xxs, sm, lg for small to large screens
        - 2xl for extra-large screens 
      */}
      <h1 className="text-base xxs:text-lg sm:text-lg lg:text-lg 2xl:text-2xl text-center font-semibold">
        © Created by{" "}
        {/* 
          Link to the creator’s LinkedIn profile:
          - Underlined text indicating it’s a clickable link
          - cursor-pointer to show pointer on hover 
        */}
        <a
          href="https://www.linkedin.com/in/joaopedrorosadepaula/"
          className="underline cursor-pointer"
        >
          João Pedro de Paula
        </a>
      </h1>
    </footer>
  );
}
