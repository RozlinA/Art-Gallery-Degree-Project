import { Link } from "react-router-dom";
import backgroundImage from "../assets/MorGabriel.jpg";
import { useFetchArtworks } from "../hooks/useFetchArtworks";

export const PhotoArt = () => {
  const { artworks, fetchError } = useFetchArtworks("photos");

  return (
    <>
      <section className="w-screen h-screen">
        <div
          className="w-full h-full max-h-[150px] md:max-h-[600px] bg-cover bg-center flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-4xl md:text-5xl text-white font-extrabold tracking-widest">
            FOTOKONST
          </h1>
        </div>
        {fetchError && (
          <p className="font-bold mt-4 text-center">{fetchError}</p>
        )}
        <section className="w-screen flex justify-center p-10 mt-4 md:mt-10">
          {artworks.length === 0 && !fetchError && (
            <p>Inga konstverk att visa.</p>
          )}
          {artworks.length > 0 && (
            <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-12">
              {artworks.map((photo) => (
                <Link to={`/konst/${photo.id}`} key={photo.id}>
                  <article className="relative group uppercase text-sm text-center font-medium">
                    <img
                      src={photo.main_image}
                      alt={photo.title}
                      className="w-72 h-72 md:w-[350px] md:h-[350px] object-cover transition duration-300 ease-in-out pb-3"
                    />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    {!photo.is_available && (
                      <div className="absolute -top-2.5 -right-2.5 rounded-sm p-1.5 bg-black text-xs text-white text-center font-medium">
                        SÅLD
                      </div>
                    )}
                    <h3>{photo.title}</h3>
                    <p className="text-gray-400">{photo.price} SEK</p>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      </section>
    </>
  );
};
