import AboutImage from "../assets/About.jpg";

export const About = () => {
  return (
    <>
      <div className="w-screen h-screen max-h-[80px] md:max-h-[100px] bg-black flex flex-col justify-center items-center md:mb-2">
        <h1 className="text-3xl md:text-5xl text-white font-extrabold tracking-widest">
          OM
        </h1>
      </div>
      <section className="w-screen flex justify-center items-center py-14">
        <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <div className="w-[85%] md:w-[25%]">
            <img src={AboutImage} alt="" className="rounded-2xl" />
          </div>
          <div className="w-[85%] md:w-[35%]">
            <h1 className="text-2xl font-semibold pb-2">Om ARTbyWOLF</h1>
            <div className="w-full h-auto flex flex-col gap-6">
              <p>
                ARTbyWOLF är en konstnär och fotograf med en unik förmåga att
                förena tradition och nutid i sina verk. Hennes skapande är
                inspirerat av Mellanösterns rika kulturarv och det forna
                Mesopotamien, vilket genomsyrar både hennes målningar och
                fotografier.
              </p>
              <p>
                I sitt måleri arbetar hon främst på canvas, där hon kombinerar
                akryl med andra medium för att skapa ett uttryck som är både
                dynamiskt och personligt. Som fotograf fångar ARTbyWOLF
                autentiska ögonblick och framhäver det subtila i varje scen. Med
                en skarp blick för detaljer och en känsla för estetik lyckas hon
                skapa bilder som är både visuellt kraftfulla och känslomässigt
                engagerande.
              </p>
              <p>
                Genom sin konst strävar ARTbyWOLF efter att bygga en bro mellan
                det förflutna och nuet. Hon vill inte bara förmedla en känsla
                utan också skapa en dialog som inspirerar och berör. Hennes verk
                berättar en historia - en historia om kultur, identitet och den
                ständiga rörelsen mellan tradition och modernitet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
