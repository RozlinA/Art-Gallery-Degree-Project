import backgroundImage from "../assets/theLandBetweenTheRivers3.jpg";
import { Link } from "react-router-dom";
import { useFetchArtworks } from "../hooks/useFetchArtworks";

export const Art = () => {
  const { artworks, fetchError } = useFetchArtworks("paintings");

  return (
    <>
      <section className="w-screen h-screen">
        <div
          className="w-full h-full max-h-[600px] bg-cover bg-center flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-5xl text-white font-extrabold tracking-widest">
            KONST
          </h1>
        </div>

        {fetchError && (
          <p className="font-bold mt-4 text-center">{fetchError}</p>
        )}

        <section className="w-screen flex justify-center p-10 mt-10">
          {artworks.length === 0 && !fetchError && (
            <p>Inga konstverk att visa.</p>
          )}

          {artworks.length > 0 && (
            <div className="grid grid-cols-3 gap-12">
              {artworks.map((artwork) => (
                <Link to={`/konst/${artwork.id}`} key={artwork.id}>
                  <article>
                    <img
                      src={artwork.main_image}
                      alt={artwork.title}
                      className="w-60 h-60 object-cover md:w-80 md:h-80"
                    />

                    <h3>{artwork.title}</h3>

                    <p>{artwork.price} SEK</p>
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
