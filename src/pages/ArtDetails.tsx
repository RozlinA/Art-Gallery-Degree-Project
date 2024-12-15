import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { Artwork } from "../models/Artwork";
import { useParams } from "react-router-dom";

export const ArtDetails = () => {
  const [fetchError, setFetchError] = useState("");
  const [artDetails, setArtDetails] = useState<Artwork>();
  const { artId } = useParams();

  useEffect(() => {
    const fetchArtworks = async () => {
      const { data, error } = await supabase
        .from("artworks")
        .select("*, artwork_images(*)")
        .eq("id", `${artId}`);

      if (error) {
        setFetchError("Kunde inte hämta konstverk");
      }

      if (data) {
        setArtDetails(data[0]);
      }
    };

    fetchArtworks();
  }, [artId]);

  return (
    <>
      {fetchError && <p>{fetchError}</p>}

      <section className="w-screen h-max[780px] flex justify-center items-center">
        <div className="w-3/5 flex items-center justify-center">
          {artDetails && (
            <div className="w-3/5 flex flex-col justify-center items-center gap-4">
              <div className="w-[70%] h-auto">
                <img
                  src={artDetails.main_image}
                  alt={artDetails.title}
                  className="object-contain"
                />
              </div>

              <div className="flex">
                {artDetails.artwork_images?.map((artworkImages) => (
                  <div className="w-2/5">
                    <img
                      src={artworkImages.image_url}
                      alt={artworkImages.alt_text}
                      key={artworkImages.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="w-2/5 flex flex-col gap-6">
            <div className="w-2/5">
              <h2>{artDetails?.title}</h2>
              <p>{artDetails?.size}</p>
              <p>{artDetails?.technique}</p>
              <p>{artDetails?.price}</p>
            </div>
            <button className="bg-black text-white p-2">
              Beställ konstverket
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
