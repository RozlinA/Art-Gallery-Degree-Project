import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { Artwork } from "../models/Artwork";
import { useParams } from "react-router-dom";

export const useFetchArtworks = (category?: string) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [artDetails, setArtDetails] = useState<Artwork | null>(null);
  const [fetchError, setFetchError] = useState<string>("");

  const { artId } = useParams();

  useEffect(() => {
    if (!artId && !category) return;

    const fetchArtworks = async () => {
      setFetchError("");
      setArtworks([]);
      setArtDetails(null);

      try {
        if (artId) {
          const { data, error } = await supabase
            .from("artworks")
            .select("*, artwork_images(*)")
            .eq("id", artId);

          if (error || !data || data.length === 0) {
            setFetchError("Kunde inte hämta konstverk");
            return;
          }

          setArtDetails(data[0]);
          return;
        }

        if (category) {
          const { data, error } = await supabase
            .from("artworks")
            .select()
            .eq("category", category);

          if (error || !data || data.length === 0) {
            setFetchError(
              error
                ? "Kunde inte hämta konstverk"
                : "Inga konstverk hittades för kategorin"
            );
            return;
          }

          setArtworks(data);
        }
      } catch (err) {
        setFetchError("Ett oväntat fel inträffade");
      }
    };

    fetchArtworks();
  }, [artId, category]);

  return { artworks, artDetails, fetchError };
};
