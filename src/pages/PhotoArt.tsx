import backgroundImage from "../assets/Midyat2.jpg";
import { useFetchArtworks } from "../hooks/useFetchArtworks";

export const PhotoArt = () => {
  const { artworks, fetchError } = useFetchArtworks("photos");

  return (
    <>
      <section className="w-screen h-screen">
        <div
          className="w-full h-full max-h-[600px] bg-cover bg-center flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-5xl text-white font-extrabold tracking-widest">
            FOTOKONST
          </h1>
        </div>
        <div className="flex justify-center p-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, dicta.
        </div>
        {fetchError && (
          <p className="font-bold mt-4 text-center">{fetchError}</p>
        )}
        <section className="w-screen h-screen flex justify-center p-10 mt-10">
          {artworks.length === 0 && !fetchError && (
            <p>Inga konstverk att visa.</p>
          )}
          {artworks.length > 0 && (
            <div className="flex flex-col md:grid md:grid-cols-3 gap-14">
              {artworks.map((photo) => (
                <article key={photo.id}>
                  <img
                    src={photo.main_image}
                    alt={photo.title}
                    className="w-60 h-60 object-cover md:w-80 md:h-80"
                  />
                  <h3 className="p-2">{photo.title}</h3>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </>
  );
};
