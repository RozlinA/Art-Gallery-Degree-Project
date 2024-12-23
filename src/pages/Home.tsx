import backgroundImage from "../assets/Midyat2.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="w-screen h-[620px]">
        <div
          className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center gap-6"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-6xl text-white font-extrabold tracking-widest text-center">
            ARTbyWOLF
          </h1>

          <div className="flex justify-center items-center gap-4">
            <Link to={"/konst"}>
              <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa konst
              </button>
            </Link>
            <Link to={"/fotokonst"}>
              <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa fotokonst
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

//Alt. 1: Text & CTA-knappar på bakgrundsbild och en "footer" med sociala medier-ikoner:
{
  /* <section className="w-screen h-screen">
        <div
          className="w-full h-full max-h-[600px] bg-cover bg-center flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-6xl text-white font-extrabold tracking-widest text-center">
            ARTbyWOLF
          </h1>
          <p className="text-xl text-white font-medium w-[40%] text-center p-4">
            Välkommen till ARTbyWolfs officiella hemsida - fotograf och konstnär
            i Sverige
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link to={"/konst"}>
              <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa konst
              </button>
            </Link>
            <Link to={"/fotokonst"}>
              <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa fotokonst
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[20%] flex justify-center items-center gap-4">
          <IonIcon
            icon={logoInstagram}
            size="large"
            title="Instagram"
            className="cursor-pointer hover:text-gray-400"
          ></IonIcon>
          <IonIcon
            icon={logoFacebook}
            size="large"
            title="Facebook"
            className="cursor-pointer hover:text-gray-400"
          ></IonIcon>
          <IonIcon
            icon={logoPinterest}
            size="large"
            title="Pinterest"
            className="cursor-pointer hover:text-gray-400"
          ></IonIcon>
        </div>
      </section> */
}

//Alt. 2: Samma som ovan fast utan en beskrivande text i bakgrundsbilden:

{
  /* <section className="w-screen h-screen">
<div
  className="w-full h-full max-h-[600px] bg-cover bg-center flex flex-col justify-center items-center gap-6"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <h1 className="text-6xl text-white font-extrabold tracking-widest text-center">
    ARTbyWOLF
  </h1>

  <div className="flex justify-center items-center gap-4">
    <Link to={"/konst"}>
      <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
        Visa konst
      </button>
    </Link>
    <Link to={"/fotokonst"}>
      <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
        Visa fotokonst
      </button>
    </Link>
  </div>
</div>
<div className="w-full h-[20%] flex justify-center items-center gap-4">
  <IonIcon
    icon={logoInstagram}
    size="large"
    title="Instagram"
    className="cursor-pointer hover:text-gray-400"
  ></IonIcon>
  <IonIcon
    icon={logoFacebook}
    size="large"
    title="Facebook"
    className="cursor-pointer hover:text-gray-400"
  ></IonIcon>
  <IonIcon
    icon={logoPinterest}
    size="large"
    title="Pinterest"
    className="cursor-pointer hover:text-gray-400"
  ></IonIcon>
</div>
</section> */
}

//Alt. 3: Som ovan fast med en liten beskrivande text nedanför bakgrundsbilden:

{
  /* <section className="w-screen h-screen">
        <div
          className="w-full h-full max-h-[600px] bg-cover bg-center flex flex-col justify-center items-center gap-6"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-6xl text-white font-extrabold tracking-widest text-center">
            ARTbyWOLF
          </h1>

          <div className="flex justify-center items-center gap-4">
            <Link to={"/konst"}>
              <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa konst
              </button>
            </Link>
            <Link to={"/fotokonst"}>
              <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa fotokonst
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[45%] flex flex-col justify-center items-center gap-4">
          <h2 className="text-xl font-medium">Välkommen till ARTbyWOLF</h2>
          <p className="w-[40%] text-center font-light mb-6">
            Här hittar du konst och fotografier, tillgängligt för både
            inspiration och beställning. För unika och personliga konstverk,
            tveka inte att kontakta konstnären.
          </p>
          <div className="flex gap-4 p-4">
            <IonIcon
              icon={logoInstagram}
              size="large"
              title="Instagram"
              className="cursor-pointer hover:text-gray-400"
            ></IonIcon>
            <IonIcon
              icon={logoFacebook}
              size="large"
              title="Facebook"
              className="cursor-pointer hover:text-gray-400"
            ></IonIcon>
            <IonIcon
              icon={logoPinterest}
              size="large"
              title="Pinterest"
              className="cursor-pointer hover:text-gray-400"
            ></IonIcon>
          </div>
        </div>
      </section> */
}

//Alt.4: Samma som ovan fast med CTA-knapparna längst ner, under den beskrivande texten:

{
  /* <section className="w-screen h-screen">
        <div
          className="w-full h-full max-h-[600px] bg-cover bg-center flex flex-col justify-center items-center gap-6"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-6xl text-white font-extrabold tracking-widest text-center">
            ARTbyWOLF
          </h1>
        </div>
        <div className="w-full h-[42%] flex flex-col justify-center items-center gap-4">
          <h2 className="text-xl font-medium">Välkommen till ARTbyWOLF</h2>
          <p className="w-[40%] text-center font-light mb-6">
            Här hittar du konst och fotografier, tillgängligt för både
            inspiration och beställning. För unika och personliga konstverk,
            tveka inte att kontakta konstnären.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link to={"/konst"}>
              <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa konst
              </button>
            </Link>
            <Link to={"/fotokonst"}>
              <button className="bg-[#141414] text-white font-semibold py-2 px-6 hover:bg-[#3c3c3c] rounded-sm">
                Visa fotokonst
              </button>
            </Link>
          </div>
        </div>
      </section> */
}

//Alt. 5: En svart ruta på bakgrundbilden med all info - rubrik, text + cta-knappar:

{
  /* <section className="w-screen h-screen">
        <div
          className="w-full h-full max-h-[620px] bg-cover bg-center flex flex-col justify-center p-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="w-[30%] h-[65%] bg-[#141414] p-8 flex flex-col gap-6 justify-center">
            <h1 className="text-xl text-white font-extrabold">
              Välkommen till ARTbyWOLF
            </h1>
            <p className="text-white">
              Här hittar du konst och fotografier, tillgängligt för både
              inspiration och beställning. För unika och personliga konstverk,
              tveka inte att kontakta konstnären.
            </p>
            <div className="flex gap-3">
              <Link to={"/konst"}>
                <button className="bg-white text-[#141414] font-semibold py-2 px-6 hover:bg-[#ededed] rounded-sm">
                  Visa konst
                </button>
              </Link>
              <Link to={"/fotokonst"}>
                <button className="bg-white text-[#141414] font-semibold py-2 px-6 hover:bg-[#ededed] rounded-sm">
                  Visa fotokonst
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
       */
}

//Alt. 6: En ruta med information
{
  /* <section className="w-screen h-screen">
<div
  className="w-full h-full max-h-[600px] bg-cover bg-center flex flex-col justify-center p-20"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className="w-[30%] h-[65%] bg-[#141414] p-8 flex flex-col gap-6 justify-center">
    <h1 className="text-xl text-white font-extrabold">
      Välkommen till ARTbyWOLF
    </h1>
    <p className="text-white">
      Här hittar du konst och fotografier, tillgängligt för både
      inspiration och beställning. För unika och personliga konstverk,
      tveka inte att kontakta konstnären.
    </p>
    <div className="flex gap-3">
      <Link to={"/konst"}>
        <button className="bg-white text-[#141414] font-semibold py-2 px-6 hover:bg-[#ededed] rounded-sm">
          Visa konst
        </button>
      </Link>
      <Link to={"/fotokonst"}>
        <button className="bg-white text-[#141414] font-semibold py-2 px-6 hover:bg-[#ededed] rounded-sm">
          Visa fotokonst
        </button>
      </Link>
    </div>
  </div>
</div>
</section> */
}
