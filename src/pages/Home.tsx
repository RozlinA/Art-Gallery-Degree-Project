import backgroundImage from "../assets/Midyat2.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="w-screen h-screen md:h-[620px]">
        <div
          className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center gap-6"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-5xl md:text-6xl text-white font-extrabold tracking-widest text-center">
            ARTbyWOLF
          </h1>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
            <Link to={"/konst"}>
              <button className="w-[280px] md:w-full bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa konst
              </button>
            </Link>
            <Link to={"/fotokonst"}>
              <button className="w-[280px] md:w-full bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa fotokonst
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
