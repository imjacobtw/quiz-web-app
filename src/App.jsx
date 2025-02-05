import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-navy-blue relative font-medium text-white">
      <h1 className="text-[5rem] pb-4 font-black">
        Welcome to My <span className="text-red-orange">Trivia</span> App!
      </h1>
      <p className="text-2xl font-medium text-gray-400/90">
        Please select the parameters you want for your customized trivia below:
      </p>
      <Footer />
    </div>
  );
}
