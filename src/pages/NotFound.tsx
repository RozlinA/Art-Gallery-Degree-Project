import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center">
        <div className="w-[85%] md:w-[40%] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3 text-center">
            <h1 className="text-8xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Fel - Sidan kunde inte hittas
            </h2>
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-5">
            <hr className="w-full" />
            <p className="text-base text-gray-600">
              Vi kan inte hitta sidan du söker. Kontrollera länken eller gå till
              startsidan.
            </p>
            <Link to={"/"}>
              <button className="bg-black text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Till Startsidan
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
