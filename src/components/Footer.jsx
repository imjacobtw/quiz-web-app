export default function Footer() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className="min-h-1/10 min-w-screen absolute bottom-0 flex justify-between items-center sm:px-12 text-center px-4">
      <p>
        <a
          className="text-pastel-yellow hover:text-pastel-yellow/60 transition duration-300 ease-in-out"
          href="https://github.com/imjacobtw"
        >
          Jacob Wilkerson
        </a>{" "}
        &copy; {currentYear}
      </p>
      <p>
        Built using the{" "}
        <a
          className="text-pastel-yellow hover:text-pastel-yellow/60 transition duration-300 ease-in-out"
          href="https://opentdb.com/"
        >
          Open Trivia Database API
        </a>
        .
      </p>
    </footer>
  );
}
