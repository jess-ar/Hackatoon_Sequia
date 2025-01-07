import droughtImage from "./assets/images/sequida.jpg";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('/images/drought-background.jpg')" }}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-8 text-center text-white">
        <h1 className="mt-12 font-serif text-5xl font-extrabold uppercase md:text-6xl lg:text-7xl">
          SEQUIATRON
        </h1>
        <p className="mt-6 text-lg font-light md:text-xl lg:text-2xl">
          Una visión completa sobre la <span className="font-semibold text-pink-light">crisis de sequías</span> en Catalunya.  
        </p>
        <p className="mt-1 text-lg font-light md:text-xl lg:text-xl">
          Datos actualizados, análisis y soluciones sostenibles.
        </p>
        <div className="relative w-full max-w-2xl mt-8 overflow-hidden rounded-lg shadow-lg">
        <img src={droughtImage} alt="Imagen de sequía" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
